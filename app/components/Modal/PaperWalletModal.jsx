import PropTypes from 'prop-types';
import counterpart from 'counterpart';
import {Modal, Button} from 'antd';
import React, {useEffect, useState} from 'react';
import {Viewer} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ls from '../../lib/common/localStorage';

const isLocked = () => true;

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

export default function PaperWalletModal(props) {
	const [url, setUrl] = useState(null);
	const [showHelp, setShowHelp] = useState(false);
	const [pagesCount, setPagesCount] = useState(0);
	const [pageIndex, setPageIndex] = useState(0);
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	const paperWalletData = props.paperWalletData;

	const getPaperWalletUrl = () => {
		if (!paperWalletData) {
			return;
		}

		const base64WithoutPrefix = String(paperWalletData).substr(
			'data:application/pdf;filename=generated.pdf;base64,'.length
		);
		const bytes = atob(base64WithoutPrefix);
		let length = bytes.length;
		let out = new Uint8Array(length);

		while (length--) {
			out[length] = bytes.charCodeAt(length);
		}

		const blob = new Blob([out], {type: 'application/pdf'});
		return URL.createObjectURL(blob);
	};

	useEffect(() => {
		const isMobile = window.matchMedia('(pointer:coarse)').matches;
		if (
			isMobile &&
			navigator.userAgent.indexOf('Edg') == -1 &&
			navigator.userAgent.indexOf('CriOS') == -1
		) {
			setShowHelp(true);
		}
		setUrl(getPaperWalletUrl());
	}, [paperWalletData]);

	const onPageChange = ({currentPage}) => setPageIndex(currentPage);
	const onDocumentLoad = ({doc}) => setPagesCount(doc._pdfInfo.numPages);

	const handleDownload = () => {
		const accountName = props.accountName;
		if (!accountName) return;

		let alink = document.createElement('a');
		alink.href = url;
		alink.download = `meta-paper-wallet-${
			isLocked() ? 'public-' : 'private-'
		}${accountName}.pdf`;
		alink.click();
		localStorage.removeItem('paperWalletData');
		if (props.onCancel) props.onCancel();
	};

	return (
		<Modal
			title={counterpart.translate('registration.download_paper_wallet')}
			onCancel={props.onCancel}
			closable={true}
			closeable={true}
			overlay={true}
			overlayClose={false}
			zIndex={1001}
			footer={[
				<Button key="cancel" onClick={handleDownload}>
					{counterpart.translate('wallet.download')}
				</Button>,
			]}
			className="preview_paper_wallet_modal"
			visible={props.visible}
		>
			<div
				style={{
					border: '1px solid rgba(0, 0, 0, 0.3)',
				}}
			>
				{url && (
					<Viewer
						fileUrl={url}
						plugins={[defaultLayoutPluginInstance]}
						initialPage={pageIndex}
						onPageChange={onPageChange}
						onDocumentLoad={onDocumentLoad}
					/>
				)}

				{url && (
					<div style={{marginTop: '20px', position: 'relative'}}>
						{showHelp && (
							<p
								style={{
									fontSize: '12px',
									textAlign: 'center',
									marginLeft: '20%',
									marginRight: '20%',
								}}
							>
								After tap download button, please tap the share button in
								preview window, which will bring up the Share Sheet and Select
								Save to Files or Print menu.
							</p>
						)}
					</div>
				)}
			</div>
		</Modal>
	);
}

PaperWalletModal.propTypes = {
	visible: PropTypes.bool.isRequired,
	onCancel: PropTypes.func.isRequired,
	title: PropTypes.string,
	paperWalletData: PropTypes.string,
	accountName: PropTypes.string,
};

PaperWalletModal.defaultProps = {
	title: null,
};
