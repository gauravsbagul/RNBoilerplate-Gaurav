import { Body, Header, Left, Right, Title } from 'native-base';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const InnerHeader = props => {
	console.log('TCL:InnerHeader asASD props', props);

	return (
		<>
			<Header style={{ marginTop: StatusBar.currentHeight }}>
				<Left>
					{props.isMenu ? (
						<TouchableOpacity onPress={() => props.navigation.openDrawer()}>
							<Feather name="menu" size={25} color={'#ffffff'} />
						</TouchableOpacity>
					) : (
						<TouchableOpacity onPress={() => props.navigation.goBack()}>
							<Feather name="arrow-left" size={25} color={'#ffffff'} />
						</TouchableOpacity>
					)}
				</Left>
				<Body style={{ alignItem: 'left' }}>
					<Title>{props.title}</Title>
				</Body>
				<Right />
			</Header>
		</>
	);
};
export default InnerHeader;
//export default Header;
