/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import AppStore from './src/redux/store/AppStore';
import AppNavigator from './src/navigator/AppNavigator'

const App = () => {

    return (
        <>
            <Provider store={AppStore}>
                {Platform.OS == 'ios' && <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} />}
                {Platform.OS == 'android' && <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />}
                <AppNavigator />
            </Provider>
        </>
    );
};

export default App;
