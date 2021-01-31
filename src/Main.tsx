/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './Screens/Home';
import {Provider as PaperProvider} from 'react-native-paper';
import Theme from './utils/theme.config';

declare const global: {HermesInternal: null | {}};

const Mian = () => {
  return (
    <>
      <PaperProvider theme={Theme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

export default Mian;
