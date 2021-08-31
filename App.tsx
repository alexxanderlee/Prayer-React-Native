/* eslint-disable */
import React from 'react';
import { Desk } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyDesk" component={Desk} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
