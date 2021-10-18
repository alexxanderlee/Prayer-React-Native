import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IColumn } from '../../interfaces';
import { AppNavParamsList } from '../../navigation/types';

interface ColumnItemProps {
  column: IColumn;
  onLongPress: () => void;
}

const ColumnItem: React.FC<ColumnItemProps> = ({ column, onLongPress }) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppNavParamsList, 'Desk'>>();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PrayersList', { column })}
      onLongPress={onLongPress}
    >
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
