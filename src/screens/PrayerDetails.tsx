/* eslint-disable */
import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { AppNavParamsList } from '../navigation/types';

interface PrayerDetailsProps {
  route: RouteProp<AppNavParamsList, 'PrayerDetails'>;
}

const PrayerDetails: React.FunctionComponent<PrayerDetailsProps> = ({ route }) => {
  const { prayer } = route.params;

  return (
    <View>
      <Text>{prayer.title}</Text>
    </View>
  );
};

export default PrayerDetails;
