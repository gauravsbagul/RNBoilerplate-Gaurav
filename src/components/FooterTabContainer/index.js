import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';

const styles = StyleSheet.create({
	tabBarItemContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 0
	},
	tabBarIcon: {
		width: 23,
		height: 23
	},
	tabBarIconFocused: {
		color: '#3f51b5'
	},
	iconStyle: {
		color: '#ffffff',
		fontSize: 24,
		justifyContent: 'flex-end'
	},
	tabBarImageFocused: {
		tintColor: '#3f51b5'
	},
	imageStyle: {
		tintColor: '#ffffff',
		width: 25,
		height: 25,
		justifyContent: 'flex-end'
	}
});

class Notification extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
				<Text>Chat screen</Text>
			</View>
		);
	}
}

let FooterTabNavigator = createBottomTabNavigator(
	{
		Footer1: {
			screen: Footer1,
			params: { headerTitle: 'Dashboard' }
		},
		Footer2: {
			screen: Footer2,
			params: { headerTitle: 'Create Post', visible: true }
		},
		Footer3: {
			screen: Footer3,
			params: { headerTitle: 'Notifications' }
		}
	},

	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;

				switch (routeName) {
					case 'Footer1':
						return (
							<View style={styles.tabBarItemContainer}>
								<Feather name="user" style={[styles.iconStyle, focused && styles.tabBarIconFocused]} />
							</View>
						);
						break;
					case 'Footer2':
						return (
							<View style={[styles.tabBarItemContainer]}>
								<FontAwesome
									name="line-chart"
									style={[styles.iconStyle, focused && styles.tabBarIconFocused]}
								/>
							</View>
						);
						break;
					case 'Footer3':
						return (
							<View style={styles.tabBarItemContainer}>
								<FontAwesome name="rupee" style={[styles.iconStyle, focused && styles.tabBarIconFocused]} />
							</View>
						);
						break;
				}
			}
		}),
		tabBarPosition: 'bottom',
		removeClippedSubviews: true,
		animationEnabled: true,
		resetOnBlur: true,
		tabBarOptions: {
			keyboardHidesTabBar: true,
			showLabel: false,
			inactiveTintColor: '#ffffff',
			activeTintColor: '#3f51b5',
			style: {
				backgroundColor: '#000000',
				borderTopWidth: 1,
				borderTopColor: '#d6d6d6'
			}
		}
	}
);
// let TabBarNavigation = createAppContainer(FooterTabNavigator);
export default createAppContainer(FooterTabNavigator);
