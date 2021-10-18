import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageBoxProps {
  text?: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ text = 'Empty list' }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.2,
    color: '#b2b2b2',
  },
});

export default MessageBox;
