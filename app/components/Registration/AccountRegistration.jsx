import React from 'react';
import Translate from 'react-translate-component';
import ReactTooltip from 'react-tooltip';
import utils from 'common/utils';
import SettingsActions from 'actions/SettingsActions';
import AccountRegistrationForm from './AccountRegistrationForm';
import AccountRegistrationConfirm from './AccountRegistrationConfirm';
import {ArrowLeftOutlined} from '@ant-design/icons';

class AccountRegistration extends React.Component {
	constructor() {
		super();
		this.state = {
			accountName: '',
		};
		this.continue = this.continue.bind(this);
		this.toggleConfirmed = this.toggleConfirmed.bind(this);
	}

	componentWillMount() {
		SettingsActions.changeSetting({
			setting: 'passwordLogin',
			value: true,
		});
	}

	componentDidMount() {
		ReactTooltip.rebuild();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !utils.are_equal_shallow(nextState, this.state);
	}

	continue({accountName, password}) {
		this.setState({
			accountName,
			password,
			confirmationStep: true,
		});
	}

	toggleConfirmed() {
		const {active} = this.state;
		this.setState({
			active: !active,
		});
	}

	render() {
		return (
			<>
				{this.state.confirmationStep && (
					<div
						className="back-btn"
						onClick={() => this.setState({confirmationStep: false})}
					>
						<ArrowLeftOutlined />
						<div>Back</div>
					</div>
				)}
				<div className="registration-layout registration">
					<div>
						<div className="create-account-block">
							<Translate
								component="h3"
								className="registration-account-title"
								content="registration.createByPassword"
							/>
							{!this.state.confirmationStep ? (
								<AccountRegistrationForm continue={this.continue} />
							) : (
								<AccountRegistrationConfirm
									accountName={this.state.accountName}
									password={this.state.password}
									toggleConfirmed={this.toggleConfirmed}
									history={this.props.history}
								/>
							)}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default AccountRegistration;
