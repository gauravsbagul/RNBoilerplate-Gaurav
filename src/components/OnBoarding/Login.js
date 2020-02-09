import AsyncStorage from '@react-native-community/async-storage';
import { Button, Input, InputGroup, Row, Tab, Tabs, Text, View } from 'native-base';
import React, { Component } from 'react';
import { ActivityIndicator, Alert, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { _login, _clearLoginProps } from '../../Redux/Action/actions';
import BGImageContainer from './BGImageContainer';
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;

export const DEVICE_WIDTH = Dimensions.get(`window`).width;
export const DEVICE_HEIGHT = Dimensions.get(`window`).height;
const resetActionProfile = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'Profile' })]
});
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			hidePassword: true
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		var stateObj = prevState;

		return stateObj === prevState ? null : stateObj;
	}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidUpdate(prevProps, prevState) {
		return true;
	}

	handleLogin = async () => {
		console.log('TCL: Login -> handleLogin -> handleLogin');
		const { email, password } = this.state;
		if (!email || !password) {
			Alert.alert(`Error`, `Plese fill all the required fields`, [{ text: 'OK' }], {
				cancelable: false
			});
		} else {
			if (!emailReg.test(this.state.email.trim())) {
				Alert.alert('Unauthorized user', 'Please enter valid Email Id', [{ text: 'OK' }], {
					cancelable: false
				});
			} else {
				this.setState({
					showLoader: true
				});
				const data = {
					email: this.state.email,
					password: this.state.password
				};
				this.props._login(data);
			}
		}
	};

	render() {
		const { showLoader, hidePassword } = this.state;
		return (
			<>
				<BGImageContainer navigation={this.props.navigation} isHeader isLogin title={'Sign In'}>
					<View style={styles.tabWrapper}>
						<View style={styles.inputWrapper}>
							<InputGroup style={styles.inputGroup}>
								<Input
									placeholder="Email ID"
									onChangeText={email => this.setState({ email })}
									value={this.state.email}
									keyboardType="email-address"
									returnKeyType="done"
								/>
							</InputGroup>
						</View>

						<View style={styles.inputWrapper}>
							<InputGroup style={{ borderBottomWidth: 0, backgroundColor: '#F2F2F2', borderRadius: 10 }}>
								<Input
									placeholder="Password"
									onChangeText={password => this.setState({ password })}
									value={this.state.password}
									keyboardType="default"
									returnKeyType="go"
									onSubmitEditing={() => this.handleLogin()}
									secureTextEntry={hidePassword}
								/>
								<TouchableOpacity onPress={() => this.setState({ hidePassword: !this.state.hidePassword })}>
									<Text uppercase style={{ marginRight: 10 }}>
										{hidePassword ? 'Show' : 'Hide'}
									</Text>
								</TouchableOpacity>
							</InputGroup>
						</View>
					</View>
					<Button rounded style={styles.button} onPress={() => this.handleLogin()}>
						{showLoader ? (
							<ActivityIndicator size="large" color="#FFFFFF" animating />
						) : (
							<Text>{'Login'}</Text>
						)}
					</Button>
					<Button rounded style={styles.button} onPress={() => this.props.navigation.navigate('Signup')}>
						<Text>Signup</Text>
					</Button>
				</BGImageContainer>
			</>
		);
	}
}
const mapStateToProps = state => {
	const { userLogin } = state.userReducer;
	return {
		userLogin
	};
};
const mapDispatchToProps = {
	_login,
	_clearLoginProps
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
	tab: { backgroundColor: '#0000', height: DEVICE_HEIGHT - 110 },
	tabWrapper: { backgroundColor: '#0000', padding: 20, borderRadius: 20 },
	inputGroup: { borderBottomWidth: 0, backgroundColor: '#F2F2F2', borderRadius: 10 },
	inputWrapper: {
		borderBottomColor: '#000',
		marginVertical: 5,
		borderBottomWidth: 0.5
	},
	button: {
		marginHorizontal: 20,
		backgroundColor: '#5499C7',
		marginTop: 30,
		alignContent: 'center',
		flex: 1
	}
});
