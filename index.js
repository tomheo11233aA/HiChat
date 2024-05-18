// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */

import App from './App';
import React from 'react';
import i18n from './src/language/i18n'
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import { AppRegistry, Text } from 'react-native';
import store, { persistor } from '@redux/store/store';
// import store, { persistor } from '@redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false

AppRegistry.registerComponent(appName, () => Root);
