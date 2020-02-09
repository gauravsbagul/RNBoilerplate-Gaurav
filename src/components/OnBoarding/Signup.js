import { Button, Input, InputGroup, Text, View, Icon, Row, Picker } from 'native-base';
import React, { Component } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { _clearSignUpProps, _signUp } from '../../Redux/Action/actions';
import BGImageContainer from './BGImageContainer';
import Entypo from 'react-native-vector-icons/Entypo';

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;
const LANGUAGE_ARRAY = [{ language: 'English' }, { language: 'Hindi' }, { language: 'Marathi' }];

class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			mobileNumber: '',
			companyName: '',
			password: '',
			showLoader: false,
			hasExceptedTerms: false,
			hidePassword: true,
			hideConfirmPassword: true,
			error: false,
			response: null
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		var stateObj = prevState;

		return stateObj === prevState ? null : stateObj;
	}

	async componentDidMount() {}

	componentWillUnmount() {}

	componentDidUpdate(prevProps, prevState) {
		return true;
	}

	onSignUp = () => {
		const {
			name,
			email,
			password,
			mobileNumber,
			companyName,
			confirmPassword,
			hasExceptedTerms
		} = this.state;
		if (!mobileNumber) {
			Alert.alert(`Error`, `Plese fill all the contact number field`, [{ text: 'OK' }], {
				cancelable: false
			});
		} else {
			if (!emailReg.test(this.state.email.trim())) {
				Alert.alert('Error', 'Please enter valid Email Id', [{ text: 'OK' }], {
					cancelable: false
				});
			} else {
				if (confirmPassword !== password) {
					Alert.alert('Error', 'Password must match', [{ text: 'OK' }], {
						cancelable: false
					});
				} else {
					if (!hasExceptedTerms) {
						Alert.alert('Error', 'Please Accepts the tearms and conditions', [{ text: 'OK' }], {
							cancelable: false
						});
					} else {
						this.setState({
							showLoader: true
						});
						const data = {
							name: name,
							email: email,
							mobileNumber: mobileNumber,
							companyName: companyName,
							password: password,
							hasExceptedTerms: hasExceptedTerms
						};
						this.props._signUp(data);
					}
				}
			}
		}
	};

	render() {
		const { hidePassword, hasExceptedTerms, hideConfirmPassword, showLoader } = this.state;
		return (
			<>
				<BGImageContainer navigation={this.props.navigation} isHeader isBack title={'Signup'}>
					<View style={{ backgroundColor: '#0000', padding: 20, borderRadius: 20 }}>
						<>
							<View style={styles.inputWrapper}>
								<InputGroup styles={styles.inputGroup}>
									<Input
										placeholder="Full Name"
										onChangeText={name => this.setState({ name })}
										value={this.state.name}
										keyboardType="default"
										returnKeyType="done"
										autoFocus={true}
									/>
								</InputGroup>
							</View>

							<View style={styles.inputWrapper}>
								<InputGroup styles={styles.inputGroup}>
									<Input
										placeholder="Email"
										onChangeText={email => this.setState({ email })}
										value={this.state.email}
										keyboardType="email-address"
										returnKeyType="done"
									/>
								</InputGroup>
							</View>

							<View style={styles.inputWrapper}>
								<InputGroup styles={styles.inputGroup}>
									<Input
										placeholder="Contact No*"
										onChangeText={mobileNumber => this.setState({ mobileNumber })}
										value={this.state.mobileNumber}
										keyboardType="default"
									/>
								</InputGroup>
							</View>

							<View style={styles.inputWrapper}>
								<InputGroup styles={styles.inputGroup}>
									<Input
										placeholder="Company Name"
										onChangeText={companyName => this.setState({ companyName })}
										value={this.state.companyName}
										keyboardType="default"
									/>
								</InputGroup>
							</View>
							<View style={styles.inputWrapper}>
								<InputGroup styles={styles.inputGroup}>
									<Input
										placeholder="Password"
										onChangeText={password => this.setState({ password })}
										value={this.state.password}
										keyboardType="default"
										returnKeyType="go"
										secureTextEntry={hidePassword}
										onSubmitEditing={() => this.onSignUp()}
									/>
									<TouchableOpacity onPress={() => this.setState({ hidePassword: !this.state.hidePassword })}>
										<Entypo
											style={{ marginRight: 15 }}
											name={hidePassword ? 'eye-with-line' : 'eye'}
											size={25}
										/>
									</TouchableOpacity>
								</InputGroup>
							</View>
							<View style={styles.inputWrapper}>
								<InputGroup styles={styles.inputGroup}>
									<Input
										placeholder="Confirm Password"
										onChangeText={confirmPassword => this.setState({ confirmPassword })}
										value={this.state.confirmPassword}
										keyboardType="default"
										returnKeyType="go"
										secureTextEntry={hideConfirmPassword}
										onSubmitEditing={() => this.onSignUp()}
									/>
									<TouchableOpacity
										onPress={() => this.setState({ hideConfirmPassword: !this.state.hideConfirmPassword })}
									>
										<Entypo
											style={{ marginRight: 15 }}
											name={hideConfirmPassword ? 'eye-with-line' : 'eye'}
											size={25}
										/>
									</TouchableOpacity>
								</InputGroup>
							</View>

							<View style={styles.termsAndConditionWrapper}>
								<Row>
									<TouchableOpacity onPress={() => this.setState({ hasExceptedTerms: !hasExceptedTerms })}>
										<Icon
											name={hasExceptedTerms ? 'ios-checkmark-circle' : 'ios-radio-button-off'}
											style={[styles.inputBoxIcon, { color: '#3f51b5' }]}
										/>
									</TouchableOpacity>
									<Text style={styles.pageEndLabelOrNote}>
										<Text style={[styles.pageEndLabelOrNote, { color: '#000000' }]}>I agree to the </Text>
										Terms & Condition
									</Text>
								</Row>
							</View>
							<Button rounded style={styles.signUpButton} onPress={showLoader ? null : () => this.onSignUp()}>
								{showLoader ? (
									<ActivityIndicator size="large" color="#FFFFFF" animating />
								) : (
									<Text>Sign Up</Text>
								)}
							</Button>
						</>
					</View>
				</BGImageContainer>
			</>
		);
	}
}
const mapStateToProps = state => {
	const { userSignup } = state.userReducer;
	return {
		userSignup
	};
};
const mapDispatchToProps = {
	_signUp,
	_clearSignUpProps
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: '#0000'
	},
	inputGroup: { borderBottomWidth: 0 },
	inputWrapper: {
		backgroundColor: '#F2F2F2',
		borderBottomColor: '#000',
		marginVertical: 5,
		borderRadius: 10,
		borderBottomWidth: 0
	},
	termsAndConditionWrapper: {
		height: 40,
		paddingVertical: 10,
		borderRadius: 10,
		backgroundColor: '#F2F2F2',
		marginTop: 32,
		alignItems: 'flex-start'
	},
	inputBoxIcon: {
		color: '#3f51b5',
		fontSize: 19,
		marginHorizontal: 10,
		marginBottom: 5
	},
	pageEndLabelOrNote: {
		color: '#3e50b4',
		fontSize: 14,
		fontWeight: '700'
	},
	signUpButton: {
		backgroundColor: '#5499C7',
		marginTop: 30,
		alignContent: 'center',
		flex: 1
	}
});
