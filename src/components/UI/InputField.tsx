/* eslint-disable */
import React from 'react';
import { TextInput, StyleSheet, ViewStyle } from 'react-native';
import { FieldRenderProps } from 'react-final-form';

interface InputFiledProps extends FieldRenderProps<string> {
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  style?: ViewStyle;
}

const InputFiled: React.FC<InputFiledProps> = ({
  input,
  meta,
  customStyle,
  placeholder,
  placeholderTextColor = '#b3b3b3',
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      value={input.value}
      onChangeText={input.onChange}
      style={[styles.input, customStyle]}
      placeholder={placeholder} 
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default InputFiled;
