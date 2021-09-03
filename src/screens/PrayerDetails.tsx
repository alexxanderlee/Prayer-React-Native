/* eslint-disable */
import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavParamsList } from '../navigation/types';
import { Header } from '../components';
import { PrayHandsSvg } from '../components/svg';

interface PrayerDetailsProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'PrayerDetails'>;
  route: RouteProp<AppNavParamsList, 'PrayerDetails'>;
}

const PrayerDetails: React.FunctionComponent<PrayerDetailsProps> = ({ navigation, route }) => {
  const { prayer } = route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header
        navigation={navigation}
        isBackBtnVisible={true}
        backgroundColor="#BFB393"
        borderShown={false}
        backBtnColor="#FFFFFF"
        rightBtnIcon={<PrayHandsSvg color="#FFFFFF" />}
      />
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{prayer.title}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleWrapper: {
    paddingBottom: 23,
    paddingHorizontal: 15,
    backgroundColor: '#BFB393',
  },
  title: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 27,
    color: '#FFFFFF',
  },
});

export default PrayerDetails;
