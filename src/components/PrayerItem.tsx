/* eslint-disable */
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IPrayer } from '../interfaces';
import { PrayHandsSvg, UserSvg, CheckSvg } from './svg';
import { AppNavParamsList } from '../navigation/types';

interface PrayerItemProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'PrayersList'>;
  prayer: IPrayer;
}

const PrayerItem: React.FC<PrayerItemProps> = ({ navigation, prayer }) => {
  const [membersCount, setMembersCount] = React.useState<number>(0);
  const [praysCount, setPraysCount] = React.useState<number>(0);
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PrayerDetails', { prayer })}>
      <View style={styles.indicator}></View>

      <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
        <View style={styles.checkboxBox}>
          {isChecked && <CheckSvg />}
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>{prayer.title}</Text>

      <TouchableOpacity style={styles.btn} onPress={() => setMembersCount(membersCount + 1)}>
        <UserSvg />
        <Text style={styles.btnText}>{membersCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => setPraysCount(praysCount + 1)}>
        <PrayHandsSvg />
        <Text style={styles.btnText}>{praysCount}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  indicator: {
    width: 3,
    height: 22,
    borderRadius: 10,
    backgroundColor: '#AC5253',
  },
  checkbox: {
    height: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderColor: '#514D47',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
  },
  btn: {
    height: '100%',
    minWidth: 55,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    marginLeft: 5,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    color: '#514D47',
  },
});

export default PrayerItem;
