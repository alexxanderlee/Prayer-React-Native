import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import { AuthNavParamsList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { userActions, userSelectors } from '../../state/features/user';
import { InputField, Button, ErrorMessage } from '../../components/UI';
import validators from '../../utils/validation';

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
  const error = useAppSelector(userSelectors.getError);

  function onSubmit(values: FormValues) {
    const payload = {
      email: values.email,
      password: values.password,
    };
    dispatch(userActions.loginUser(payload));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.text}>Welcome to Prayer</Text>

        {error ? <ErrorMessage text={error} /> : null}

        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <>
              <Field
                name="email"
                placeholder="Email"
                showErrorText={false}
                customStyle={styles.input}
                validate={validators.required}
                component={InputField}
              />
              <Field
                name="password"
                placeholder="Password"
                secureTextEntry={true}
                showErrorText={false}
                customStyle={styles.input}
                validate={validators.required}
                component={InputField}
              />
              {isLoading
                ? <ActivityIndicator  color="#72A8BC" size="large" />
                : <Button text="Login" onPress={handleSubmit} />
              }
            </>
          )}
        />
        {!isLoading && (
          <View style={styles.signup}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Signup');
              dispatch(userActions.clearError());
            }}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentWrapper: {
    paddingHorizontal: 40,
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
    marginBottom: 25,
    color: '#a0a0a0',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    letterSpacing: 0.6,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
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
