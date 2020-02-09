import { Button, Title } from 'native-base';
import * as React from 'react';
import { Text, View } from 'react-native';

class Dashboard extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Title style={{ color: '#000', fontSize: 20 }}>Dashboard page </Title>
				<Button
					transparent
					rounded
					style={{
						marginTop: 30,
						alignContent: 'center',
						flex: 1
					}}
					onPress={() => this.props.navigation.navigate('Signup')}
				>
					<Text>Signup</Text>
				</Button>
				<Button
					transparent
					rounded
					style={{
						marginTop: 30,
						alignContent: 'center',
						flex: 1
					}}
					onPress={() => this.props.navigation.navigate('Login')}
				>
					<Text>Login</Text>
				</Button>
			</View>
		);
	}
}
export default Dashboard;
