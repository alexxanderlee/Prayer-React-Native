/* eslint-disable */
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AppNavParamsList, PrayersListNavParamsList } from '../types';
import { PrayersList, SubscribedPrayersList } from '../../screens';
import { Header } from '../../components';
import { SettingsSvg } from '../../components/svg';

interface Props {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'PrayersList'>;
  route: RouteProp<AppNavParamsList, 'PrayersList'>;
}

const Tab = createMaterialTopTabNavigator<PrayersListNavParamsList>();

const PrayersListNavigator: React.FC<Props> = ({ navigation, route }) => {
  const { column } = route.params;

  return (
    <>
      <Header
        navigation={navigation}
        title={column.title}
        isBackBtnVisible={true}
        rightBtnIcon={<SettingsSvg />}
        borderShown={false}
      />
      <Tab.Navigator
        initialRouteName="MyPrayers"
        screenOptions={{
          tabBarActiveTintColor: '#72A8BC',
          tabBarInactiveTintColor: '#C8C8C8',
          tabBarIndicatorStyle: { backgroundColor: '#72A8BC' },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
            lineHeight: 16,
          },
        }}
      >
        <Tab.Screen
          name="MyPrayers"
          component={PrayersList}
          options={{ title: 'My Prayers' }}
        />
        <Tab.Screen
          name="Subscribed"
          component={SubscribedPrayersList}
          options={{ title: 'Subscribed' }}
        />
      </Tab.Navigator>
    </>
  );
};

export default PrayersListNavigator;
