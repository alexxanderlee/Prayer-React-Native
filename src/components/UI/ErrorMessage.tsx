/* eslint-disable */
import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ErrorMessageProps {
  text?: string;
  customStyle?: ViewStyle;
  customTextStyle?: TextStyle;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text, customStyle, customTextStyle }) => {
  const style = [styles.error, customStyle];
  const textStyle = [styles.errorText, customTextStyle];

  return (
    <View style={style}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f4e1e1',
  },
  errorText: {
    color: '#db4848',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
  },
});

export default ErrorMessage;
