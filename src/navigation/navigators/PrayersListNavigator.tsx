import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AppNavParamsList, PrayersListNavParamsList } from '../types';
import { PrayersListScreen, SubPrayersListScreen } from '../../screens';
import { Header, ModalWindow } from '../../components';
import { SettingsSvg } from '../../components/svg';
import { UserModal } from '../../components/modals';

interface Props {
  route: RouteProp<AppNavParamsList, 'PrayersList'>;
}

const Tab = createMaterialTopTabNavigator<PrayersListNavParamsList>();

const PrayersListNavigator: React.FC<Props> = ({ route }) => {
  const { column } = route.params;
  const [userModalVisible, setUserModalVisible] = React.useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <ModalWindow visible={userModalVisible} setVisible={setUserModalVisible}>
        <UserModal />
      </ModalWindow>

      <Header
        title={column.title}
        isBackBtnVisible={true}
        rightBtnIcon={<SettingsSvg />}
        onRightBtnPress={() => setUserModalVisible(true)}
        variant="borderNone"
      />

      <Tab.Navigator
        initialRouteName="MyPrayers"
        backBehavior="none"
        screenOptions={{
          swipeEnabled: false,
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
        <Tab.Screen name="MyPrayers" options={{ title: 'My Prayers' }}>
          {props => <PrayersListScreen {...props} columnId={column.id} />}
        </Tab.Screen>
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
