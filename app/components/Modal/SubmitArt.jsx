import React from 'react';
import utils from 'common/utils';
import {DecimalChecker} from '../Utility/DecimalChecker';
import counterpart from 'counterpart';
import {Modal, Button} from 'antd';
import AccountStore from 'stores/AccountStore';

class DepositModalContent extends DecimalChecker {
	constructor() {
		super();

		this.state = {
			name: '',
			description: '',
			sku: '',
			image_url: '',
			email: '',
			image: 'Waiting for confirmation',
			holder: AccountStore.getState().currentAccount,
			category: '',
			art_value: '',
			bond_value: '',
			bond_number: '',
			assignee: '',
		};
	}

	onClose() {
		this.props.hideModal();
	}

	componentDidMount() {}

	shouldComponentUpdate(np, ns) {
		return !utils.are_equal_shallow(ns, this.state);
	}

	handleChangeEmail(event) {
		this.setState({email: event.target.value});
	}

	handleChangeTitle(event) {
		this.setState({name: event.target.value});
	}

	handleChangeDescription(event) {
		this.setState({description: event.target.value});
	}

	handleChangeDocLink(event) {
		this.setState({sku: event.target.value});
	}

	handleChangeImage(event) {
		this.setState({image_url: event.target.value});
	}

	handleChangeCategory(event) {
		this.setState({category: event.target.value});
	}

	handleChangeArt(event) {
		this.setState({art_value: event.target.value});
	}

	handleChangeBondValue(event) {
		this.setState({bond_value: event.target.value});
	}

	handleChangeBondNumber(event) {
		this.setState({bond_number: event.target.value});
	}

	handleChangeAssignee(event) {
		this.setState({assignee: event.target.value});
	}

	sendData(data) {
		(async () => {
			const rawResponse = await fetch(
				'https://luna.meta-exchange.info/api/books',
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			);
			const content = await rawResponse.json();

			console.log(content);
		})();
		alert(
			'You can check status of your submission here:\n\n https://luna.meta-exchange.info'
		);
		window.open('https://luna.meta-exchange.info', '_blank');
		this.props.hideModal();
	}

	render() {
		return (
			<form
				onSubmit={this.sendData.bind(this, this.state)}
				style={{
					display: 'flex',
					margin: '-50px 0px -15px 0px',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<h2 style={{fontSize: '17px'}}>Title</h2>
				<input
					required
					type="text"
					onChange={this.handleChangeTitle.bind(this)}
				/>
				<br />
				<h2 style={{fontSize: '17px'}}>Description</h2>
				<textarea
					required
					type="text"
					onChange={this.handleChangeDescription.bind(this)}
				/>
				<br />
				<h2 style={{fontSize: '17px'}}>Detailed description document link</h2>
				<input
					required
					type="text"
					onChange={this.handleChangeDocLink.bind(this)}
				/>
				<br />
				<h2 style={{fontSize: '17px'}}>Preview Image link</h2>
				<input
					required
					type="text"
					onChange={this.handleChangeImage.bind(this)}
				/>
				<br />
				<h2 style={{fontSize: '17px'}}>Your contact email address</h2>
				<input
					required
					type="email"
					onChange={this.handleChangeEmail.bind(this)}
				/>
				<br />
				<h2 style={{fontSize: '17px'}}>Art category/genre</h2>
				<input
					required
					type="text"
					onChange={this.handleChangeCategory.bind(this)}
				/>
				<br />
				<h2 style={{fontSize: '17px'}}>Appraised art value</h2>
				<input
					required
					type="text"
					onChange={this.handleChangeArt.bind(this)}
				/>
				<br />
				<h2 style={{fontSize: '17px'}}>Art surety bond value </h2>
				<input
					required
					type="text"
					onChange={this.handleChangeBondValue.bind(this)}
				/>
				<br />
				<h2 style={{fontSize: '17px'}}>Art surety bond number</h2>
				<input
					required
					type="text"
					onChange={this.handleChangeBondNumber.bind(this)}
				/>
				<br />
				<h2 style={{fontSize: '17px'}}>Art assignee</h2>
				<input
					required
					type="text"
					onChange={this.handleChangeAssignee.bind(this)}
				/>
				<br />
				<button type="submit" className="button">
					Submit
				</button>
			</form>
		);
	}
}

export default class SubmitArt extends React.Component {
	constructor() {
		super();

		this.state = {open: false};
	}

	show() {
		this.setState({open: true}, () => {
			this.props.hideModalArt();
		});
	}

	onClose() {
		this.props.hideModalArt();
		this.setState({open: false});
	}

	render() {
		return (
			<Modal
				title={
					this.props.account
						? counterpart.translate('modal.deposit.art', {
								account_name: this.props.account,
						  })
						: counterpart.translate('modal.deposit.art')
				}
				id={this.props.modalId}
				className={this.props.modalId}
				onCancel={this.onClose.bind(this)}
				overlay={true}
				footer={[
					<Button key="cancel" onClick={this.props.hideModalArt}>
						{counterpart.translate('modal.close')}
					</Button>,
				]}
				visible={this.props.visibleArt}
				noCloseBtn
			>
				<DepositModalContent
					hideModal={this.props.hideModalArt}
					{...this.props}
					open={this.props.visibleArt}
				/>
			</Modal>
		);
	}
}
