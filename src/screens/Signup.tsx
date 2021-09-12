/* eslint-disable */
import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthNavParamsList } from '../navigation/types';
import { BackArrowSvg } from '../components/svg';

interface SignupProps {
  navigation: NativeStackNavigationProp<AuthNavParamsList, 'Signup'>;
}

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <BackArrowSvg color={'#514D47'} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.text}>Create an account</Text>
        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#b3b3b3" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#b3b3b3" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#b3b3b3" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm password" placeholderTextColor="#b3b3b3" secureTextEntry />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.login}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login here</Text>
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
  },
  header: {
    alignItems: 'flex-start',
  },
  backBtn: {
    padding: 20,
  },
  contentWrapper: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'center',
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
  login: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#514D47',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    letterSpacing: 0.4,
    marginRight: 5,
  },
  loginLink: {
    color: '#72A8BC',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
});

export default Signup;
