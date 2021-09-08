/* eslint-disable */
import React from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PrayerItem } from '../components';
import { AppNavParamsList } from '../navigation/types';
import { IPrayer } from '../interfaces';

const prayers: IPrayer[] = [
  {
    id: 0,
    columnId: 1,
    title: 'Subscribed Prayer item one',
    description: '',
    checked: false,
  },
  {
    id: 1,
    columnId: 1,
    title: 'Subscribed Prayer item two',
    description: '',
    checked: false,
  },
  {
    id: 2,
    columnId: 0,
    title: 'Subscribed Prayer item three',
    description: '',
    checked: false,
  },
  {
    id: 3,
    columnId: 0,
    title: 'Subscribed Prayer item four',
    description: '',
    checked: false,
  },
];

interface SubscribedPrayersListProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'PrayersList'>;
}

const SubscribedPrayersList: React.FC<SubscribedPrayersListProps> = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 30 }}
        data={prayers}
        renderItem={({ item }) => <PrayerItem navigation={navigation} prayer={item} />}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={(
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Show answered prayers</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#BFB393',
    borderRadius: 15,
    shadowColor: '#424e75',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
});

export default SubscribedPrayersList;