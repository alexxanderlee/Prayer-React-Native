/* eslint-disable */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNavParamsList } from './types';
import { AppNavigator, AuthNavigator } from './navigators';

const Stack = createNativeStackNavigator<RootNavParamsList>();

const RootNavigator: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = React.useState<boolean>(false);
  return (
    isSignedIn
      ? <AppNavigator />
      : <AuthNavigator setIsSignedIn={setIsSignedIn} />
  );
};

export default RootNavigator;
