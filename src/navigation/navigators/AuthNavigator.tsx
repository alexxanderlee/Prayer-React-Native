/* eslint-disable */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavParamsList } from '../types';
import { Login, Signup } from '../../screens';

const Stack = createNativeStackNavigator<AuthNavParamsList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;