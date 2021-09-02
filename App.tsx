/* eslint-disable */
import React from 'react';
import { Desk, PrayersList } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IColumn } from './interfaces';

export type RootStackParamList = {
  Home: undefined;
  PrayersList: { column: IColumn };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Desk}
        />
        <Stack.Screen
          name="PrayersList"
          component={PrayersList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
