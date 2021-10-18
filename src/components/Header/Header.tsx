import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BackArrowSvg } from '../svg';
import { AppNavParamsList } from '../../navigation/types';

interface HeaderProps {
  title?: string;
  rightBtnIcon?: React.ReactNode;
  onRightBtnPress?: () => void;
  isBackBtnVisible?: boolean;
  variant?: 'default' | 'borderNone' | 'golden';
}

const Header: React.FC<HeaderProps> = ({
  title,
  rightBtnIcon,
  onRightBtnPress,
  isBackBtnVisible = false,
  variant = 'default',
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppNavParamsList, 'Desk' | 'PrayersList' | 'PrayerDetails'>>();

  let headerContainerStyle, backBtnColor;
  if (variant === 'default') {
    headerContainerStyle = styles.headerContainer;
  }
  if (variant === 'borderNone') {
    headerContainerStyle = [styles.headerContainer, {
      borderBottomWidth: 0,
    }];
  }
  if (variant === 'golden') {
    headerContainerStyle = [styles.headerContainer, {
      borderBottomWidth: 0,
      backgroundColor: '#BFB393',
    }];
    backBtnColor = '#FFFFFF';
  }

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
