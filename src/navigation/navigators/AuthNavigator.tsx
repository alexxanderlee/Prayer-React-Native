/* eslint-disable */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavParamsList } from '../types';
import { Login, Signup } from '../../screens';

interface Props {
  setIsSignedIn: (value: boolean) => void;
}

const Stack = createNativeStackNavigator<AuthNavParamsList>();

const AuthNavigator: React.FC<Props> = ({ setIsSignedIn }) => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {props => <Login {...props} setIsSignedIn={setIsSignedIn} />}
      </Stack.Screen>
      <Stack.Screen
        name="Signup"
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;