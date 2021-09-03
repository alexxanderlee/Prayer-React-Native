/* eslint-disable */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNavParamsList } from './types';
import { AppNavigator, AuthNavigator } from './navigators';

const Stack = createNativeStackNavigator<RootNavParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="App" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="App"
        component={AppNavigator}
      />
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
