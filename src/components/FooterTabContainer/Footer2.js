import { Title } from 'native-base';
import * as React from 'react';
import { View } from 'react-native';
import InnerHeader from '../Header/InnerHeader';
class Footer1 extends React.Component {
	render() {
		return (
			<>
				<InnerHeader navigation={this.props.navigation} title={'Line Chart'} isMenu />
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Title style={{ color: '#000', fontSize: 20 }}>Line Chart</Title>
				</View>
			</>
		);
	}
}
export default Footer1;
