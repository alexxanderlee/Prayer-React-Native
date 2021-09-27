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
import { ColumnItem, Header, ModalWindow } from '../../components';
import { ErrorMessage, MessageBox } from '../../components/UI';
import { ModalInput, ContextMenu } from '../../components/modals';
import { PlusSvg } from '../../components/svg';
import { AppNavParamsList } from '../../navigation/types';
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

  const [currentColumn, setCurrentColumn] = React.useState<IColumn | null>(null);
  const [modalInputVisible, setModalInputVisible] = React.useState<boolean>(false);
  const [modalMenuVisible, setModalMenuVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(columnsActions.getAllColumnsRequest());
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(columnsActions.getAllColumnsRequest());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ModalWindow
        visible={modalInputVisible}
        setVisible={setModalInputVisible}
        onClose={() =>setCurrentColumn(null)}
      >
        <ModalInput
          currentColumn={currentColumn!}
          setCurrentColumn={setCurrentColumn}
          setModalVisible={setModalInputVisible}
        />
      </ModalWindow>

      <ModalWindow
        visible={modalMenuVisible}
        setVisible={setModalMenuVisible}
        onClose={() =>setCurrentColumn(null)}
        contentAlign="flex-end"
      >
        <ContextMenu
          currentColumn={currentColumn!}
          setCurrentColumn={setCurrentColumn}
          setModalVisible={setModalMenuVisible}
          onDelete={(id) => dispatch(columnsActions.deleteColumnRequest(id))}
          onEdit={() => setModalInputVisible(true)}
        />
      </ModalWindow>

      <Header
        title="My Desk"
        navigation={navigation}
        rightBtnIcon={<PlusSvg/>}
        onRightBtnPress={() => setModalInputVisible(true)}
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
                onLongPress={() => {
                  setCurrentColumn(item);
                  setModalMenuVisible(true);
                }}
              />
            )}
            keyExtractor={item => item.id.toString()}
            refreshing={isLoading}
            onRefresh={onRefresh}
            ListEmptyComponent={MessageBox}
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
