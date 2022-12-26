import {migrationApi} from './api';
import {Login, PrivateKey, Signature} from 'meta1-vision-js';

const buildSignature = async (accountName, password) => {
	let publicKey, signature;

	try {
		const signerPkey = PrivateKey.fromWif(password);
		publicKey = signerPkey.toPublicKey().toString();
		signature = Signature.sign(accountName, signerPkey).toHex();
	} catch (err) {
		const account = await Login.generateKeys(
			accountName,
			password,
			['owner'],
			process.env.REACT_APP_KEY_PREFIX
		);
		const ownerPrivateKey = account.privKeys.owner.toWif();
		publicKey = account.pubKeys.owner;
		const signerPkey = PrivateKey.fromWif(ownerPrivateKey);
		signature = Signature.sign(accountName, signerPkey).toHex();
	}

	return {accountName, publicKey, signature, is4Migration: true};
};

// MIGRATION
const checkOldUser = async (accountName) => {
	try {
		const {data} = await migrationApi.get(
			`/checkTransferable?accountName=${accountName}`
		);
		return {...data, error: false};
	} catch (e) {
		return {message: 'Something is wrong', error: true};
	}
};

const validateSignature = async (accountName, password) => {
	try {
		const payload = await buildSignature(accountName, password);
		const {data} = await migrationApi.post(`/validateSignature`, payload);
		return data;
	} catch (e) {
		return {message: 'Invalid Signature', error: true};
	}
};

const checkMigrationable = async (accountName) => {
	try {
		const {data} = await migrationApi.get(
			`/migration-status?identifier=${accountName}`
		);
		return {...data, error: false};
	} catch (e) {
		return {message: 'Not able to migrate', error: true};
	}
};

const migrate = async (accountName, password) => {
	try {
		const payload = await buildSignature(accountName, password);
		const {data} = await migrationApi.post(`/migrate`, payload);
		return data;
	} catch (e) {
		return {message: 'Something is wrong', error: true};
	}
};

export default {
	checkOldUser,
	validateSignature,
	checkMigrationable,
	migrate,
};
