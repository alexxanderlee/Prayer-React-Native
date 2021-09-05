/* eslint-disable */
import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header, PrayerItem } from '../components';
import { SettingsSvg, PlusLgSvg } from '../components/svg';
import { AppNavParamsList } from '../navigation/types';
import { IPrayer } from '../interfaces';

const prayers: IPrayer[] = [
  {
    id: 0,
    columnId: 1,
    title: 'Prayer item one',
    description: '',
    checked: false,
  },
  {
    id: 1,
    columnId: 1,
    title: 'Prayer item two',
    description: '',
    checked: false,
  },
  {
    id: 2,
    columnId: 0,
    title: 'Prayer item two which is for my family to love God whole heartedly.',
    description: '',
    checked: false,
  },
];

interface PrayersListProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'PrayersList'>;
  route: RouteProp<AppNavParamsList, 'PrayersList'>;
}

const PrayersList: React.FC<PrayersListProps> = ({ navigation, route }) => {
  const { column } = route.params;

  return (
    <>
      <Header
        navigation={navigation}
        title={column.title}
        isBackBtnVisible={true}
        rightBtnIcon={<SettingsSvg />}
      />

      <View style={styles.content}>
        <FlatList
          ListHeaderComponent={(
            <View style={styles.inputWrapper}>
              <TouchableOpacity style={styles.inputBtn}>
                <PlusLgSvg />
              </TouchableOpacity>
              <TextInput placeholder="Add a prayer..." placeholderTextColor="#9C9C9C" style={styles.input} />
            </View>
          )}
          contentContainerStyle={{ padding: 15, paddingBottom: 30 }}
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
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputWrapper: {
    marginBottom: 15,
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
    color: '#514D47',
    flex: 1,
    paddingVertical: 13,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
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

export default PrayersList;
