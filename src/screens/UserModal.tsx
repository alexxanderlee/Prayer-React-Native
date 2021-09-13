/* eslint-disable */
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavParamsList } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { userActions, userSelectors } from '../state/features/user';

interface UserModalProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'UserModal'>;
}

const UserModal: React.FC<UserModalProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelectors.getUserData);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.pop()}>
        <View style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '100%' }} />
      </TouchableWithoutFeedback>
      <View style={styles.window}>
        <Image style={styles.avatar} source={require('../assets/images/noavatar.png')} />
        <Text style={styles.nameString}>{user.name}</Text>
        <Text style={styles.emailString}>{user.email}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => dispatch(userActions.logoutUser())}>
          <Text style={styles.btnText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  window: {
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    padding: 40,
    borderRadius: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  nameString: {
    marginTop: 25,
    color: '#514D47',
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '600',
  },
  emailString: {
    marginTop: 7,
    color: '#a0a0a0',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '600',
  },
  btn: {
    marginTop: 25,
    paddingVertical: 7,
    paddingHorizontal: 40,
    borderRadius: 20,
    backgroundColor: '#72A8BC',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
    letterSpacing: 0.4,
  }
});

export default UserModal;
