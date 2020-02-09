import { Body, Header, Left, Right, Title } from 'native-base';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const HeaderFile = props => {
	return (
		<>
			<Header style={{ marginTop: StatusBar.currentHeight }}>
				<Left>
					{props.isBack ? (
						<TouchableOpacity onPress={() => props.navigation.goBack()}>
							<Feather name="arrow-left" size={25} color={'#ffffff'} />
						</TouchableOpacity>
					) : null}
				</Left>
				<Body>
					<Title>{props.title}</Title>
				</Body>
				<Right />
			</Header>
		</>
	);
};
export default HeaderFile;
