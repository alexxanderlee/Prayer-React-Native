import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BackArrowSvg } from '../svg';
import { AppNavParamsList } from '../../navigation/types';

interface HeaderProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'Desk' | 'PrayersList' | 'PrayerDetails'>;
  title?: string;
  rightBtnIcon?: React.ReactNode;
  onRightBtnPress?: () => void;
  isBackBtnVisible?: boolean;
  backBtnColor?: string;
  backgroundColor?: string;
  borderShown?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  navigation,
  title,
  rightBtnIcon,
  onRightBtnPress,
  isBackBtnVisible = false,
  backBtnColor,
  backgroundColor = '#FFFFFF',
  borderShown = true,
}) => {
  const headerContainerStyle = [styles.headerContainer, {
    borderBottomWidth: borderShown ? 1 : 0,
    backgroundColor,
  }];

  return (
    <View style={headerContainerStyle}>
      <View style={styles.flankItem}>
        {isBackBtnVisible && (
          <TouchableOpacity style={styles.btnLeft} onPress={() => navigation.goBack()}>
            <BackArrowSvg color={backBtnColor} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerItem}>
        {title && <Text style={styles.title}>{title}</Text>}
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
  headerContainer: {
    backgroundColor: '#FFFFFF',
    height: 64,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  centerItem: {
    flex: 5,
  },
  flankItem: {
    flex: 1,
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
