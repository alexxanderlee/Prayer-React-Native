/* eslint-disable */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Desk, PrayersList, PrayerDetails } from '../../screens';
import { AppNavParamsList } from '../types';
import { PrayersListNavigator } from '../navigators';

const Stack = createNativeStackNavigator<AppNavParamsList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Desk" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Desk"
        component={Desk}
      />
      <Stack.Screen
        name="PrayersList"
        component={PrayersListNavigator}
      />
      <Stack.Screen
        name="PrayerDetails"
        component={PrayerDetails}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
