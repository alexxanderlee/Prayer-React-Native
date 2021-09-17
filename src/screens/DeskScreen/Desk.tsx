import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
  Platform,
  RefreshControl,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ColumnItem, Header } from '../../components';
import { AppNavParamsList } from '../../navigation/types';
import { PlusSvg } from '../../components/svg';
import { ErrorMessage } from '../../components/UI';
import { useAppSelector, useAppDispatch } from '../../state/hooks';
import { columnsSelectors, columnsActions } from '../../state/features/columns';
import { IColumn } from '../../interfaces';

interface DeskProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'Desk'>;
}

const Desk: React.FC<DeskProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const columns = useAppSelector(columnsSelectors.getColumns);
  const isLoading = useAppSelector(columnsSelectors.isLoading);
  const error = useAppSelector(columnsSelectors.getError);

  React.useEffect(() => {
    dispatch(columnsActions.fetchGetAllCols());
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(columnsActions.fetchGetAllCols());
  }, []);

  function createNewColumn(title: string) {
    dispatch(columnsActions.fetchCreateCol({ title, description: '' }));
  }

  function deleteColumn(id: number) {
    dispatch(columnsActions.fetchDeleteCol(id));
  }

  function editColumn(column: IColumn) {
    const onSubmit = (title: string) => dispatch(columnsActions.fetchUpdateCol({
      title,
      description: column.description,
      columnId: column.id,
    }));
    navigation.replace('ModalInput', {
      onSubmit,
      initialValue: column.title,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="My Desk"
        navigation={navigation}
        rightBtnIcon={<PlusSvg/>}
        onRightBtnPress={() => navigation.navigate('ModalInput', {
          onSubmit: createNewColumn,
          initialValue: '',
        })}
      />
      {error
        ? <ScrollView
            style={styles.contentWrapper}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
          >
            <ErrorMessage text={error} />
          </ScrollView>
        : <FlatList
            contentContainerStyle={styles.contentWrapper}
            data={columns}
            renderItem={({ item }) => (
              <ColumnItem
                column={item}
                navigation={navigation}
                onLongPress={() => navigation.navigate('ContextMenu', {
                  onDelete: () => deleteColumn(item.id),
                  onEdit: () => editColumn(item),
                })}
              />
            )}
            keyExtractor={item => item.id.toString()}
            refreshing={isLoading}
            onRefresh={onRefresh}
          />}
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
