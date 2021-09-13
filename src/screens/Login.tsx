/* eslint-disable */
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, ActivityIndicator } from 'react-native';
import { Form, Field } from 'react-final-form';
import { AuthNavParamsList } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { userActions, userSelectors } from '../state/features/user';
import { InputField } from '../components/UI';
import validators from '../utils/validation';

interface FormValues {
  email: string,
  password: string,
}

interface LoginProps {
  navigation: NativeStackNavigationProp<AuthNavParamsList, 'Login'>;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(userSelectors.isLoading);
  const error = useAppSelector(userSelectors.getError)

  function onSubmit(values: FormValues) {
    dispatch(userActions.loginUser(values));
  }

  if (error) {
    return <View><Text>{JSON.stringify(error)}</Text></View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.text}>Welcome to Prayer</Text>
        {isLoading ? (
          <ActivityIndicator  color="#72A8BC" size="large" />
        ) : (
          <>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, submitting, pristine }) => (
                <>
                  <Field
                    name="email"
                    placeholder="Email"
                    validate={validators.required}
                    component={InputField}
                  />
                  <Field
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    validate={validators.required}
                    component={InputField}
                  />
                  <TouchableOpacity style={styles.btn} onPress={handleSubmit} disabled={submitting || pristine}>
                    <Text style={styles.btnText}>Login</Text>
                  </TouchableOpacity>
                </>
              )}
            />
            <View style={styles.signup}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
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
