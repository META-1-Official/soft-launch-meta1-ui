import React from 'react';

class Confirm extends React.Component {
	constructor() {
		super();
		this.state = {
			confirmCode: '',
			message: '',
		};
	}

	componentDidMount() {
		console.log('confirmCode', this.props.match.params.confirmCode);

		fetch(
			`${process.env.GATEWAY_URL}/api/user/verify/` +
				this.props.match.params.confirmCode,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
				},
			}
		)
			.then(async (response) => {
				if (response.status === 200) {
					this.setState({message: 'Your email is confirmed'});
				} else {
					console.log('post');
					this.setState({message: 'Your email is unconfirmed'});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="grid-container page-layout help-content-layout">
				<div className="grid-block page-layout">
					<div className="grid-block main-content wrap regular-padding">
						<div className="grid-block medium-3" />

						<div>
							<h2>{this.state.message}</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Confirm;
