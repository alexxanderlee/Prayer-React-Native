/* eslint-disable */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PlusSvg, BackArrowSvg } from './svg';

interface HeaderProps {
  title: string;
  rightBtnIcon?: React.ReactNode;
  onRightBtnPress?: () => void;
  isBackBtnVisible?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, rightBtnIcon, onRightBtnPress, isBackBtnVisible = false }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.item}>
        {isBackBtnVisible && (
          <TouchableOpacity style={styles.btnLeft} onPress={() => navigation.goBack()}>
            <BackArrowSvg />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.item}>
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
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#ffffff',
  },
  item: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 22,
    paddingHorizontal: 15,
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  btnLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 22,
    paddingHorizontal: 15,
  },
  btnRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 22,
    paddingHorizontal: 15,
  },
});

export default Header;
