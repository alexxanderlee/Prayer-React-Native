import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  text?: string;
  customStyle?: ViewStyle,
  customTextStyle?: TextStyle;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, customStyle, customTextStyle, onPress }) => {
  const style = [styles.btn, customStyle];
  const textStyle = [styles.btnText, customTextStyle];

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default Button;
