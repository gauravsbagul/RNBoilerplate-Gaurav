import React, { PureComponent } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import BGImageContainer from './BGImageContainer';

const resetActionLogin = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'Login' })]
});
class Spalsh extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.handleSetTimeout();
	}

	handleSetTimeout = () => {
		setTimeout(
			function() {
				this.props.navigation.dispatch(resetActionLogin);
			}.bind(this),
			3000
		);
	};

	render() {
		return <BGImageContainer />;
	}
}

export default Spalsh;
