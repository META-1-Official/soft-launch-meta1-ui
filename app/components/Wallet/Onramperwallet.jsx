import React from 'react';
import {ArrowLeftOutlined} from '@ant-design/icons';
import history from '../../lib/common/history';

const Onramperwallet = () => {
	const primaryColor = 'ffc000';
	const darkMode = true;
	const defaultAmount = 500;
	const defaultFiat = 'USD';
	const defaultCrypto = 'BTC';
	const apiKey = process.env.ONRAMPER_API_KEY;
	const onlyCryptos = 'BTC,ETH,USDT,LTC,XLM';
	const onlyFiat = 'USD,EUR';
	const baseURL = process.env.ONRAMPER_URL;
	const title = 'META1';

	return (
		<div className="onramper-wrapper">
			<div className="back-btn" onClick={() => history.goBack()}>
				<ArrowLeftOutlined />
				<div>Back</div>
			</div>
			<div className="onramper-wallet">
				<iframe
					src={`${baseURL}?color=${primaryColor}&darkMode=${darkMode}&defaultAmount=${defaultAmount}&defaultFiat=${defaultFiat}&defaultCrypto=${defaultCrypto}&apiKey=${apiKey}&onlyCryptos=${onlyCryptos}&onlyFiat=${onlyFiat}`}
					title={title}
					width="30%"
					height="650"
					frameBorder="0"
					allowFullScreen=""
					aria-hidden="false"
					tabIndex="0"
				/>
			</div>
		</div>
	);
};

export default Onramperwallet;
