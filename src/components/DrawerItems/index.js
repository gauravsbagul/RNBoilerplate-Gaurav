import { Body, Header, ListItem, Text, Thumbnail, Title } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import User from '../../Assets/user.png';

const resetActionLogin = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'Login' })]
});
class DrawerItems extends Component {
	constructor(props) {
		console.log('TCL: DrawerItems -> constructor -> props', props);
		super(props);
		this.state = {};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		var stateObj = prevState;

		return stateObj === prevState ? null : stateObj;
	}

	componentDidMount() {}

	componentWillUnmount() {}
	componentWillBlur = payload => {};

	componentDidFocus = payload => {};

	navigateToPage = screen => {
		switch (screen) {
			case 'DrawerScreen1':
				this.props.navigation.closeDrawer();
				this.props.navigation.navigate('DrawerScreen1');
				break;
			case 'DrawerScreen2':
				this.props.navigation.closeDrawer();
				this.props.navigation.navigate('DrawerScreen2');
				break;
			case 'DrawerScreen3':
				this.props.navigation.closeDrawer();
				this.props.navigation.navigate('DrawerScreen3');
				break;
		}
	};

	gotToDashboard = () => {
		this.props.navigation.closeDrawer();
		this.props.navigation.navigate('FooterTabNavigator');
	};

	render() {
		return (
			<View style={{ backgroundColor: '#3f51b5', flex: 1 }}>
				<ListItem style={{ backgroundColor: '#0000' }}>
					<TouchableOpacity onPress={() => this.gotToDashboard()}>
						<Header transparent>
							<Title style={{ marginBottom: 0, fontFamily: 'roboto', fontWeight: 'bold' }}>My Project</Title>
						</Header>
					</TouchableOpacity>
				</ListItem>

				<TouchableOpacity>
					<ListItem style={{ backgroundColor: '#0000' }} onPress={() => this.navigateToPage('DrawerScreen1')}>
						<Thumbnail source={User} style={{ marginLeft: 15, width: 40, height: 40 }} />

						<Text style={{ color: '#ffffff', fontSize: 17, marginLeft: 27 }}>{'My name'}</Text>
					</ListItem>
				</TouchableOpacity>

				<>
					<ListItem style={{ backgroundColor: '#0000' }} onPress={() => this.navigateToPage('DrawerScreen1')}>
						<Body style={{ marginLeft: 29 }}>
							<Text style={{ color: '#ffffff', fontSize: 17 }}>Drawer screen 1</Text>
						</Body>
					</ListItem>

					<ListItem style={{ backgroundColor: '#0000' }} onPress={() => this.navigateToPage('DrawerScreen2')}>
						<Body style={{ marginLeft: 29 }}>
							<Text style={{ color: '#ffffff', fontSize: 17 }}>Drawer screen 2</Text>
						</Body>
					</ListItem>
					<ListItem style={{ backgroundColor: '#0000' }} onPress={() => this.navigateToPage('DrawerScreen2')}>
						<Body style={{ marginLeft: 29 }}>
							<Text style={{ color: '#ffffff', fontSize: 17 }}>Drawer screen 3</Text>
						</Body>
					</ListItem>
				</>
			</View>
		);
	}
}

export default DrawerItems;

const styles = StyleSheet.create({
	lineStyle: {
		borderWidth: 1,
		borderColor: '#ffffff',
		opacity: 0.5,
		marginTop: 20,
		marginBottom: 15
	}
});
