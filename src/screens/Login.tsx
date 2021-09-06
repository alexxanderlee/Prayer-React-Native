/* eslint-disable */
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { AuthNavParamsList } from '../navigation/types';

interface LoginProps {
  navigation: NativeStackNavigationProp<AuthNavParamsList, 'Login'>;
  setIsSignedIn: (value: boolean) => void;
}

const Login: React.FunctionComponent<LoginProps> = ({ navigation, setIsSignedIn }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.text}>Welcome to Prayer</Text>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#b3b3b3" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#b3b3b3" />
        <TouchableOpacity style={styles.btn} onPress={() => setIsSignedIn(true)}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signup}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '75%',
  },
  title: {
    marginBottom: 6,
    color: '#514D47',
    fontSize: 24,
    lineHeight: 26,
    fontWeight: '600',
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  text: {
    marginBottom: 40,
    color: '#a0a0a0',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    letterSpacing: 0.6,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 40,
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0.4,
  },
  btn: {
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 40,
    backgroundColor: '#BFB393',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  signup: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: '#514D47',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    letterSpacing: 0.4,
    marginRight: 5,
  },
  signupLink: {
    color: '#72A8BC',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
});

export default Login;
