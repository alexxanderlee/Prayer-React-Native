import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavParamsList } from '../types';
import { LoginScreen, SignupScreen } from '../../screens';

const Stack = createNativeStackNavigator<AuthNavParamsList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
