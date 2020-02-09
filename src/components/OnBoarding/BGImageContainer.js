import { Container, Content } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import BG from '../../Assets/bg.jpeg';
import Header from '../Header/HeaderFile';

const BGImageContainer = props => {
	console.log('TCL:  BGImageContainerprops', props);
	return (
		<>
			<ImageBackground
				resizeMode="stretch"
				source={BG}
				style={styles.imageStyle}
				imageStyle={{ height: '100%', width: '100%' }}
			>
				{props.isHeader ? (
					<Header navigation={props.navigation} isBack={props.isBack} title={props.title} />
				) : null}
				<Container style={[styles.container]}>
					<Content padder>{props.children}</Content>
				</Container>
			</ImageBackground>
		</>
	);
};
export default BGImageContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'center',
		// backgroundColor: '#F2F2F2'
		backgroundColor: '#0000'
	},
	inputWrapper: {
		borderBottomColor: '#000',
		marginVertical: 5,
		borderBottomWidth: 0.5
	},
	imageStyle: {
		// marginTop: StatusBar.currentHeight,
		width: '100%',
		height: '100%'
	}
});
