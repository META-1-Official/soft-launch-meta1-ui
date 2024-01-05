import Meta1 from 'meta1-vision-dex';
import {Login, PrivateKey, Signature} from 'meta1-vision-js';

export async function buildSignature4Fas(accountName, passkey, email) {
	let publicKey, signature;
	const signatureContent = `fas-migration:${email}:${accountName}`;

	await Meta1.connect(process.env.DEFAULT_WS_NODE);
	const loginResult = await Meta1.login(accountName, passkey);

	if (loginResult) {
		try {
			const signerPkey = PrivateKey.fromWif(passkey);
			publicKey = signerPkey.toPublicKey().toString();
			publicKey = publicKey.replace('GPH7', process.env.REACT_APP_KEY_PREFIX);
			signature = Signature.sign(accountName, signerPkey).toHex();
		} catch (err) {
			const account = await Login.generateKeys(
				accountName,
				passkey,
				['owner'],
				process.env.REACT_APP_KEY_PREFIX
			);
			const ownerPrivateKey = account.privKeys.owner.toWif();
			publicKey = account.pubKeys.owner;
			const signerPkey = PrivateKey.fromWif(ownerPrivateKey);
			signature = Signature.sign(signatureContent, signerPkey).toHex();
		}
	}

	return {publicKey, signature, signatureContent};
}

export default buildSignature4Fas;
