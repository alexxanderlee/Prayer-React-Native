/* eslint-disable */
import React from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ColumnItem, Header } from '../components';
import { IColumn } from '../interfaces';
import { AppNavParamsList } from '../navigation/types';
import { PlusSvg } from '../components/svg';

const columns: IColumn[] = [
  {
    id: 0,
    title: 'To do',
    description: '',
  },
  {
    id: 1,
    title: 'In progress',
    description: '',
  },
  {
    id: 2,
    title: 'Completed',
    description: '',
  },
];

interface DeskProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'Desk'>;
}

const Desk: React.FC<DeskProps> = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} title="My Desk" rightBtnIcon={<PlusSvg/>} />
      <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ padding: 15, }}
        data={columns}
        renderItem={({ item }) => <ColumnItem column={item} navigation={navigation} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default Desk;
