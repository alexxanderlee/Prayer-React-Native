import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Form, Field } from 'react-final-form';
import { AuthNavParamsList } from '../../navigation/types';
import { BackArrowSvg } from '../../components/svg';
import { InputField, Button, ErrorMessage } from '../../components/UI';
import validators, { composeValidators } from '../../utils/validation';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { userActions, userSelectors } from '../../state/features/user';

interface FormValues {
  name: string,
  email: string,
  password: string,
  confirm: string,
}

interface FormErrors {
  name?: string,
  email?: string,
  password?: string,
  confirm?: string,
}

interface SignupProps {
  navigation: NativeStackNavigationProp<AuthNavParamsList, 'Signup'>;
}

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(userSelectors.isLoading);
  const error = useAppSelector(userSelectors.getError);

  function onSubmit(values: FormValues) {
    const payload = {
      email: values.email,
      name: values.name,
      password: values.password,
    };
    dispatch(userActions.signupUser(payload));
  }

  function formValidation(values: FormValues) {
    const errors: FormErrors = {};
    if (values.password !== values.confirm) {
      errors.confirm = 'Must match';
    }
    return errors;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => {
            navigation.goBack();
            dispatch(userActions.clearError());
          }}>
            <BackArrowSvg color={'#514D47'} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.text}>Create an account</Text>

          {error ? <ErrorMessage text={error} /> : null}

          <Form
            onSubmit={onSubmit}
            validate={formValidation}
            render={({ handleSubmit }) => (
              <>
                <Field
                  name="name"
                  placeholder="Name"
                  customStyle={styles.input}
                  validate={validators.required}
                  component={InputField}
                />
                <Field
                  name="email"
                  placeholder="Email"
                  customStyle={styles.input}
                  validate={composeValidators(
                    validators.required,
                    validators.validateEmail,
                  )}
                  component={InputField}
                />
                <Field
                  name="password"
                  placeholder="Password"
                  customStyle={styles.input}
                  secureTextEntry
                  validate={validators.required}
                  component={InputField}
                />
                <Field
                  name="confirm"
                  placeholder="Confirm password"
                  customStyle={styles.input}
                  secureTextEntry
                  validate={validators.required}
                  component={InputField}
                />
                {isLoading
                ? <ActivityIndicator  color="#72A8BC" size="large" />
                  : <Button text="Sign Up" onPress={handleSubmit} />
                }
              </>
            )}
          />
          {!isLoading && (
            <View style={styles.login}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Login');
                dispatch(userActions.clearError());
              }}>
                <Text style={styles.loginLink}>Login here</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
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
  wrapper: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
  },
  backBtn: {
    padding: 20,
  },
  content: {
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
