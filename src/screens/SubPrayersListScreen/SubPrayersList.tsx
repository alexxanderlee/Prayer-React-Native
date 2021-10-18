import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SubPrayersList: React.FC = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Empty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {

  },
});

export default SubPrayersList;
