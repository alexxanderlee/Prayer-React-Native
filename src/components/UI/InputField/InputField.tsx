import React from 'react';
import { TextInput, View, Text, StyleSheet, ViewStyle } from 'react-native';
import { FieldRenderProps } from 'react-final-form';

interface InputFiledProps extends FieldRenderProps<string> {
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  showErrorText?: boolean;
}

const InputFiled: React.FC<InputFiledProps> = ({
  input,
  meta,
  customStyle,
  placeholder,
  placeholderTextColor = '#b3b3b3',
  secureTextEntry = false,
  showErrorText = true,
}) => {
  const style = (meta.error && meta.touched)
    ? [styles.input, customStyle, { borderColor: '#e09898', borderWidth: 1 }]
    : [styles.input, customStyle];

  return (
    <View>
      {showErrorText && meta.error && meta.touched && (
        <Text style={styles.errorText}>
          {meta.error}
        </Text>
      )}
      <TextInput
        value={input.value}
        onChangeText={input.onChange}
        style={style}
        placeholder={placeholder} 
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onBlur={() => input.onBlur()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 40,
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0.4,
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
  errorText: {
    position: 'absolute',
    top: -14,
    left: 20,
    color: '#db4848',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 13,
  },
});

export default InputFiled;
