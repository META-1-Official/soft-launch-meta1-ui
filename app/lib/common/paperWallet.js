import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import WalletDb from 'stores/WalletDb';
import image from '../../assets/icons/paper-wallet-header.png';
import {PrivateKey, ChainStore} from 'meta1-vision-js';
export const getPrivateKeys = (accountName, password) => {
	let passwordKeys = {};
	const acc = ChainStore.getAccount(accountName, false);
	let fromWif;
	try {
		fromWif = PrivateKey.fromWif(password);
	} catch (err) {
		console.log('Err in validate', err);
	}

	if (fromWif) {
		const key = {
			privKey: fromWif,
			pubKey: fromWif.toPublicKey().toString(),
		};

		if (acc)
			['active', 'owner', 'memo'].forEach((role) => {
				if (acc) {
					if (role === 'memo') {
						if (acc.getIn(['options', 'memo_key']) == key.pubKey)
							passwordKeys[role] = key;
						else {
							passwordKeys[role] = {
								pubKey: acc.getIn(['options', 'memo_key']),
							};
						}
					} else {
						acc.getIn([role, 'key_auths']).forEach((auth) => {
							if (auth.get(0) == key.pubKey) passwordKeys[role] = key;
							else {
								passwordKeys[role] = {
									pubKey: auth.get(0),
								};
							}
						});
					}
				}
			});
	} else {
		passwordKeys['active'] = generateKeyFromPassword(
			accountName,
			'active',
			password
		);
		passwordKeys['owner'] = generateKeyFromPassword(
			accountName,
			'owner',
			password
		);
		passwordKeys['memo'] = generateKeyFromPassword(
			accountName,
			'memo',
			password
		);
	}
	return passwordKeys;
};

function generateKeyFromPassword(accountName, role, password) {
	let seed = accountName + role + password;
	let privKey = PrivateKey.fromSeed(seed);
	let pubKey = privKey.toPublicKey().toString();

	return {privKey, pubKey};
}
const isLocked = () => true;
export const _createPaperWalletAsPDFNew = function (
	ownerkeys,
	activeKeys,
	memoKey,
	accountName,
	callback
) {
	const width = 1050,
		height = 1150, //mm
		lineMargin = 5,
		qrSize = 50,
		textMarginLeft = qrSize + 7,
		qrMargin = 5,
		textHeight = 8;

	let rowHeight = 110;
	const keys = [activeKeys, ownerkeys, memoKey];
	const keysName = ['Active Key', 'Owner Key', 'Memo Key'];

	let locked = isLocked();

	const pdf = new jsPDF({
		orientation: 'portrait',
		format: [width, height],
		compressPdf: true,
	});

	const checkPageH = (pdfInstance, currentPageH, maxPageH) => {
		if (currentPageH >= maxPageH) {
			pdfInstance.addPage();
			rowHeight = 10;
		}
		return pdf.internal.getNumberOfPages();
	};

	const keyRow = (key) => {
		let currentPage = checkPageH(pdf, rowHeight, 400);
		gQrcode(key.pubKey, qrMargin, rowHeight + 10, currentPage);
		if (locked && !!key.privKey) {
			gQrcode(key.privKey.toWif(), 315, rowHeight + 10, currentPage);
		}
		pdf.text('PublicKey', textMarginLeft, rowHeight + 20);
		pdf.text(key.pubKey, textMarginLeft, rowHeight + 30);
		pdf.text('PrivateKey', textMarginLeft, rowHeight + 40);
		pdf.rect(textMarginLeft - 1, rowHeight + 24, 258, textHeight);
		if (locked) {
			pdf.text('PrivateKey', textMarginLeft, rowHeight + 40);
			if (!!key.privKey) {
				pdf.text(key.privKey.toWif(), textMarginLeft, rowHeight + 50);
			} else {
				pdf.text('Not found.', textMarginLeft, rowHeight + 50);
			}
			pdf.rect(textMarginLeft - 1, rowHeight + 44, 258, textHeight);
		}
		rowHeight += 50;
	};

	const gQrcode = (qrcode, rowWidth, rowHeight, currentPage) => {
		QRCode.toDataURL(qrcode)
			.then((url) => {
				pdf.setPage(currentPage);
				pdf.addImage(url, 'JPEG', rowWidth, rowHeight, qrSize, qrSize);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	let img = new Image();
	img.src = image;
	pdf.addImage(img, 'PNG', 115, 30, 150, 50, '', 'MEDIUM');
	pdf.text('Account:', 18, rowHeight - 10);
	pdf.text(accountName, 42, rowHeight - 10);

	let content = keys.map((key, index) => {
		if (key) {
			if (index >= 1) {
				rowHeight += 25; // add margin-top for block
			}
			checkPageH(pdf, rowHeight, 400);
			pdf.text('Public', 22, rowHeight + 7);
			pdf.text(keysName[index], 170, rowHeight + 7);
			if (locked) {
				pdf.text('Private', 327, rowHeight + 7);
			}
			pdf.line(lineMargin, rowHeight + 1, 365, rowHeight + 1);
			pdf.line(lineMargin, rowHeight + 9, 365, rowHeight + 9);
			keyRow(key);
		}
	});

	Promise.all(content).then(() => {
		const blob = pdf.output('datauristring');
		if (callback) callback(blob);
		else
			pdf.save(
				'meta' +
					'-paper-wallet-' +
					(locked ? 'public-' : 'private-') +
					accountName +
					'.pdf'
			);
	});
};
export const _createPaperWalletAsPDF = function (
	ownerkeys,
	activeKeys,
	memoKey,
	accountName
) {
	const keysCnt = ownerkeys.size + activeKeys.size + 1;
	const width = 1050,
		height = 1150 + (keysCnt - 3) * 65, //mm
		lineMargin = 5,
		qrSize = 50,
		textMarginLeft = qrSize + 7,
		qrMargin = 5,
		textHeight = 8;

	let rowHeight = 110;
	const keys = [activeKeys, ownerkeys, memoKey];
	const keysName = ['Active Key', 'Owner Key', 'Memo Key'];

	let locked = WalletDb.isLocked();

	const pdf = new jsPDF({
		orientation: 'portrait',
		format: [width, height],
		compressPdf: true,
	});

	const checkPageH = (pdfInstance, currentPageH, maxPageH) => {
		if (currentPageH >= maxPageH) {
			pdfInstance.addPage();
			rowHeight = 10;
		}
		return pdf.internal.getNumberOfPages();
	};

	const keyRow = (publicKey) => {
		let currentPage = checkPageH(pdf, rowHeight, 400);
		let privateKey = null;
		if (!locked) {
			privateKey = WalletDb.getPrivateKey(publicKey);
			if (!!privateKey) {
				privateKey = privateKey.toWif();
			}
		}
		gQrcode(publicKey, qrMargin, rowHeight + 10, currentPage);
		if (!locked && !!privateKey) {
			gQrcode(privateKey, 315, rowHeight + 10, currentPage);
		}
		pdf.text('PublicKey', textMarginLeft, rowHeight + 20);
		pdf.text(publicKey, textMarginLeft, rowHeight + 30);
		pdf.rect(textMarginLeft - 1, rowHeight + 24, 258, textHeight);
		if (!locked) {
			pdf.text('PrivateKey', textMarginLeft, rowHeight + 40);
			if (!!privateKey) {
				pdf.text(privateKey, textMarginLeft, rowHeight + 50);
			} else {
				pdf.text('Not found.', textMarginLeft, rowHeight + 50);
			}
			pdf.rect(textMarginLeft - 1, rowHeight + 44, 258, textHeight);
		}
		rowHeight += 50;
	};

	const gQrcode = (qrcode, rowWidth, rowHeight, currentPage) => {
		QRCode.toDataURL(qrcode)
			.then((url) => {
				pdf.setPage(currentPage);
				pdf.addImage(url, 'JPEG', rowWidth, rowHeight, qrSize, qrSize);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	let img = new Image();
	img.src = image;
	pdf.addImage(img, 'PNG', 115, 30, 150, 50, '', 'MEDIUM');
	pdf.text('Account:', 18, rowHeight - 10);
	pdf.text(accountName, 42, rowHeight - 10);

	let content = keys.map((publicKeys, index) => {
		if (index >= 1) {
			rowHeight += 25; // add margin-top for block
		}
		checkPageH(pdf, rowHeight, 400);
		pdf.text('Public', 22, rowHeight + 7);
		pdf.text(keysName[index], 170, rowHeight + 7);
		if (!locked) {
			pdf.text('Private', 327, rowHeight + 7);
		}
		pdf.line(lineMargin, rowHeight + 1, 365, rowHeight + 1);
		pdf.line(lineMargin, rowHeight + 9, 365, rowHeight + 9);
		if (typeof publicKeys === 'string') {
			keyRow(publicKeys);
		} else {
			publicKeys.map((publicKey) => {
				keyRow(publicKey);
			});
		}
	});

	Promise.all(content).then(() => {
		pdf.save(
			'meta' +
				'-paper-wallet-' +
				(locked ? 'public-' : 'private-') +
				accountName +
				'.pdf'
		);
	});
};

const createPaperWalletAsPDF = function (account) {
	let getKeys = function (target) {
		let key_auths = account.get(target).get('key_auths');
		return key_auths.map((a) => a.get(0));
	};

	_createPaperWalletAsPDF(
		getKeys('owner'),
		getKeys('active'),
		account.get('options').get('memo_key'),
		account.get('name')
	);
};

export {createPaperWalletAsPDF};
