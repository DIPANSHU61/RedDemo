import { AppRegistry } from 'react-native';
import {Provider} from "react-redux";
import AppNavigator from "./src/router/AppNavigator";
import React from "react";
import configureStore from './src/store/index'


const store = configureStore()

const RedDemo = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
)

AppRegistry.registerComponent('RedDemo', () => RedDemo);
