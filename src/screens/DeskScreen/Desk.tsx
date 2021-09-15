import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ColumnItem, Header } from '../../components';
import { IColumn } from '../../interfaces';
import { AppNavParamsList } from '../../navigation/types';
import { PlusSvg } from '../../components/svg';

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
    <SafeAreaView style={styles.container}>
      <Header
        title="My Desk"
        navigation={navigation}
        rightBtnIcon={<PlusSvg/>}
      />
      <FlatList
        contentContainerStyle={styles.contentWrapper}
        data={columns}
        renderItem={({ item }) => <ColumnItem column={item} navigation={navigation} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentWrapper: {
    padding: 15,
  },
});

export default Desk;
