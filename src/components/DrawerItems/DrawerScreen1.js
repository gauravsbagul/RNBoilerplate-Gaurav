import { Button, Title } from 'native-base';
import * as React from 'react';
import { Text, View } from 'react-native';
import InnerHeader from '../Header/InnerHeader';
class Footer1 extends React.Component {
	render() {
		return (
			<>
				<InnerHeader navigation={this.props.navigation} title={'Drawer 1'} />
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Title style={{ color: '#000', fontSize: 20 }}>Drawer 1</Title>
				</View>
			</>
		);
	}
}
export default Footer1;
