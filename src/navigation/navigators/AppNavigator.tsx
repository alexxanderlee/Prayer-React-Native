import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeskScreen, UserModalScreen, PrayerDetailsScreen, ModalInput, ContextMenu } from '../../screens';
import { AppNavParamsList } from '../types';
import { PrayersListNavigator } from '../navigators';

const Stack = createNativeStackNavigator<AppNavParamsList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Desk" screenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ animation: 'slide_from_right' }}>
        <Stack.Screen
          name="Desk"
          component={DeskScreen}
        />
        <Stack.Screen
          name="PrayersList"
          component={PrayersListNavigator}
        />
        <Stack.Screen
          name="PrayerDetails"
          component={PrayerDetailsScreen}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'transparentModal', animation: 'fade' }}>
        <Stack.Screen
          name="UserModal"
          component={UserModalScreen}
        />
        <Stack.Screen
          name="ModalInput"
          component={ModalInput}
        />
        <Stack.Screen
          name="ContextMenu"
          component={ContextMenu}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigator;
