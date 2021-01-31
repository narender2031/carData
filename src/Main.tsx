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

import {Provider as PaperProvider} from 'react-native-paper';
import Theme from './utils/theme.config';
import CustomAppNavigation from './Navigation';

declare const global: {HermesInternal: null | {}};

const Mian = () => {
  return (
    <>
      <PaperProvider theme={Theme}>
        <CustomAppNavigation />
      </PaperProvider>
    </>
  );
};

export default Mian;
