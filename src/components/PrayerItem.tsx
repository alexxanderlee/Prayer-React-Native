/* eslint-disable */
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { IPrayer } from '../interfaces';
import { PrayHandsSvg, UserSvg, CheckSvg } from './svg';

interface PrayerItemProps {
  prayer: IPrayer;
}

const PrayerItem: React.FC<PrayerItemProps> = ({ prayer }) => {
  const [membersCount, setMembersCount] = React.useState<number>(0);
  const [praysCount, setPraysCount] = React.useState<number>(0);

  return (
    <View style={styles.item}>
      <View style={styles.indicator}></View>
      <BouncyCheckbox
        fillColor={'transparent'}
        style={styles.checkbox}
        text={prayer.title}
        textStyle={styles.checkboxText}
        iconStyle={styles.checkboxIcon}
        ImageComponent={CheckSvg}
        onPress={() => {}}
      />
      <TouchableOpacity style={styles.btn} onPress={() => setMembersCount(membersCount + 1)}>
        <UserSvg />
        {membersCount > 0 && <Text style={styles.btnText}>{membersCount}</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => setPraysCount(praysCount + 1)}>
        <PrayHandsSvg />
        {praysCount > 0 && <Text style={styles.btnText}>{praysCount}</Text>}
      </TouchableOpacity>
    </View>
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
    marginRight: 15,
    width: 3,
    height: 22,
    borderRadius: 10,
    backgroundColor: '#AC5253',
  },
  checkbox: {
    height: '100%',
    flex: 1,
  },
  checkboxIcon: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderColor: '#514D47',
    borderWidth: 1,
  },
  checkboxText: {
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
  },
  btn: {
    height: '100%',
    marginLeft: 20,
    flexDirection: 'row',
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
