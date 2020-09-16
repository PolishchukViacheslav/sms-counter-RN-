/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Main } from './components/Main';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
