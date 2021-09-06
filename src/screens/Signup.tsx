/* eslint-disable */
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

interface SignupProps {
}

const Signup: React.FunctionComponent<SignupProps> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Signup screen</Text>
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
});

export default Signup;
