/* eslint-disable */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IColumn } from '../interfaces';
import { RootStackParamList } from '../App';

interface ColumnItemProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  column: IColumn;
}

const ColumnItem: React.FC<ColumnItemProps> = ({ navigation, column }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PrayersList', { column })}>
      <Text style={styles.title}>{column.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '600',
  },
});

export default ColumnItem;
