/* eslint-disable */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card } from '../components';
import { IList } from '../interfaces';

const lists: IList[] = [
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

const Desk: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        renderItem={({ item }) => <Card list={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default Desk;
