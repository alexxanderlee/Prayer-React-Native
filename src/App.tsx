/* eslint-disable */
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
