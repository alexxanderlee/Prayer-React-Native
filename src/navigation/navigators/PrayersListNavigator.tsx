/* eslint-disable */
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AppNavParamsList, PrayersListNavParamsList } from '../types';
import { PrayersList } from '../../screens';
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
      <Tab.Navigator initialRouteName="MyPrayers">
        <Tab.Screen
          name="MyPrayers"
          component={PrayersList}
        />
        <Tab.Screen
          name="Subscribed"
          component={PrayersList}
        />
      </Tab.Navigator>
    </>
  );
};

export default PrayersListNavigator;
