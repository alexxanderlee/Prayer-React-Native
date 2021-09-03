/* eslint-disable */
import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Header, PrayerItem } from '../components';
import { SettingsSvg, PlusLgSvg } from '../components/svg';
import { RootStackParamList } from '../App';
import { IPrayer } from '../interfaces';

const prayers: IPrayer[] = [
  {
    id: '0',
    columnId: '1',
    title: 'Prayer item one',
    descr: '',
    checked: false,
  },
  {
    id: '1',
    columnId: '1',
    title: 'Prayer item two',
    descr: '',
    checked: false,
  },
  {
    id: '2',
    columnId: '0',
    title: 'Prayer item',
    descr: '',
    checked: false,
  },
];

interface PrayersListProps {
  route: RouteProp<RootStackParamList, 'PrayersList'>
}

const PrayersList: React.FC<PrayersListProps> = ({ route }) => {
  const { column } = route.params;

  return (
    <>
      <Header title={column.title} isBackBtnVisible={true} rightBtnIcon={<SettingsSvg />} />

      <View style={styles.content}>
        <View style={styles.inputWrapper}>
          <TouchableOpacity style={styles.inputBtn}>
            <PlusLgSvg />
          </TouchableOpacity>
          <TextInput placeholder="Add a prayer..." style={styles.input} />
        </View>

        <View style={styles.list}>
          <FlatList
            data={prayers}
            renderItem={({ item }) => <PrayerItem prayer={item} />}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Show answered prayers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  inputWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
  },
  inputBtn: {
    padding: 15,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 13,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
  },
  list: {
    marginTop: 15,
    marginBottom: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
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

export default PrayersList;
