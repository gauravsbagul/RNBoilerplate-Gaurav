import React, { Component } from 'react';
import Root from './src';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { StyleProvider } from 'native-base';
import rootReducer from './src/Redux/Store/index.js';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<StyleProvider style={getTheme(material)}>
					<Root />
				</StyleProvider>
			</Provider>
		);
	}
}

export default App;
