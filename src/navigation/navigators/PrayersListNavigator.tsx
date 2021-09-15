import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AppNavParamsList, PrayersListNavParamsList } from '../types';
import { PrayersListScreen, SubPrayersListScreen } from '../../screens';
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
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        title={column.title}
        isBackBtnVisible={true}
        rightBtnIcon={<SettingsSvg />}
        onRightBtnPress={() => navigation.navigate('UserModal')}
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
          component={PrayersListScreen}
          options={{ title: 'My Prayers' }}
        />
        <Tab.Screen
          name="Subscribed"
          component={SubPrayersListScreen}
          options={{ title: 'Subscribed' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default PrayersListNavigator;
