/* eslint-disable */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BackArrowSvg } from './svg';
import { AppNavParamsList } from '../navigation/types';

interface HeaderProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'Desk' | 'PrayersList'>;
  title: string;
  rightBtnIcon?: React.ReactNode;
  onRightBtnPress?: () => void;
  isBackBtnVisible?: boolean
}

const Header: React.FC<HeaderProps> = ({ navigation, title, rightBtnIcon, onRightBtnPress, isBackBtnVisible = false }) => {

  return (
    <View style={styles.header}>
      <View style={styles.flankItem}>
        {isBackBtnVisible && (
          <TouchableOpacity style={styles.btnLeft} onPress={() => navigation.goBack()}>
            <BackArrowSvg />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerItem}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.flankItem}>
        {rightBtnIcon && (
          <TouchableOpacity style={styles.btnRight} onPress={onRightBtnPress}>
            {rightBtnIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#ffffff',
  },
  centerItem: {
    flex: 1,
  },
  flankItem: {
    flex: 1/5,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 22,
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  btnLeft: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  btnRight: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
});

export default Header;
