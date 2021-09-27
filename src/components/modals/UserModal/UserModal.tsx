import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { userActions, userSelectors } from '../../../state/features/user';

const UserModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelectors.getUserData);

  return (
    <View style={styles.wrapper}>
      <Image style={styles.avatar} source={require('../../../assets/images/noavatar.png')} />
      <Text style={styles.nameString}>{user.name}</Text>
      <Text style={styles.emailString}>{user.email}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => dispatch(userActions.logoutUser())}>
        <Text style={styles.btnText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
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
  },
});

export default UserModal;
