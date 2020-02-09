import React, { Component } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './components/Dashboard/Dashboard';
import DrawerScreen1 from './components/DrawerItems/DrawerScreen1';
import DrawerScreen2 from './components/DrawerItems/DrawerScreen2';
import DrawerScreen3 from './components/DrawerItems/DrawerScreen3';
import DrawerItems from './components/DrawerItems/index';
import NavigationService from './components/DrawerItems/NavigationService';
import FooterTabContainer from './components/FooterTabContainer/index';
import Login from './components/OnBoarding/Login';
import Signup from './components/OnBoarding/Signup';
import Splash from './components/OnBoarding/Splash';

console.disableYellowBox = true;

const navigationOptions = ({ navigation }) => ({
	header: null
});
const RootStack = createStackNavigator(
	{
		FooterTabContainer: {
			screen: FooterTabContainer,
			navigationOptions
		},
		Splash: {
			screen: Splash,
			navigationOptions
		},
		Signup: {
			screen: Signup,
			navigationOptions
		},
		Login: {
			screen: Login,
			navigationOptions
		},
		Dashboard: {
			screen: Dashboard,
			navigationOptions
		},
		DrawerScreen1: {
			screen: DrawerScreen1,
			navigationOptions
		},
		DrawerScreen2: {
			screen: DrawerScreen2,
			navigationOptions
		},
		DrawerScreen3: {
			screen: DrawerScreen3,
			navigationOptions
		}
	},
	{
		initialRouteName: 'Splash'
	}
);

const Menu = createDrawerNavigator(
	{
		RootStack: {
			screen: RootStack
		}
	},
	{
		contentComponent: props => {
			return (
				<SafeAreaView
					style={{
						flex: 1,
						backgroundColor: '#212121',
						paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
					}}
					forceInset={{ top: 'always', horizontal: 'never' }}
				>
					<DrawerItems {...props} />
				</SafeAreaView>
			);
		}
	}
);

let Navigation = createAppContainer(Menu);
class Root extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navigation
				ref={navigatorRef => {
					NavigationService.setTopLevelNavigator(navigatorRef);
				}}
			/>
		);
	}
}
export default Root;
