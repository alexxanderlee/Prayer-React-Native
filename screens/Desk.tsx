/* eslint-disable */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ColumnItem, Header } from '../components';
import { IColumn } from '../interfaces';
import { RootStackParamList } from '../App';
import { PlusSvg } from '../components/svg';

const columns: IColumn[] = [
  {
    id: '0',
    title: 'To do',
  },
  {
    id: '1',
    title: 'In progress',
  },
  {
    id: '2',
    title: 'Completed',
  },
];

type DeskProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Desk: React.FC<DeskProps> = ({ navigation }) => {
  return (
    <>
      <Header title="My Desk" rightBtnIcon={<PlusSvg/>} />
      <View style={styles.container}>
      <FlatList
        data={columns}
        renderItem={({ item }) => <ColumnItem column={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
});

export default Desk;
