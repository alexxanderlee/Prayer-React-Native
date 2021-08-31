/* eslint-disable */
import React from 'react';
import { View, Text } from 'react-native';
import { Desk } from './screens';
import { Header } from './components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: (props) => <Header title={props.options.title} /> }}>
        <Stack.Screen
          name="Home"
          component={Desk}
          options={{ title: 'My Desk' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
