import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { PrayerItem } from '../../components';
import { PlusLgSvg } from '../../components/svg';
import { Button, ErrorMessage, MessageBox } from '../../components/UI';
import { IPrayer } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { prayersSelectors, prayersActions } from '../../state/features/prayers';
import { SwipeListView, RowMap } from 'react-native-swipe-list-view';

interface PrayersListProps {
  columnId: number;
}

const PrayersList: React.FC<PrayersListProps> = ({ columnId }) => {
  const inputRef = React.useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const checkedPrayers: IPrayer[] = useAppSelector(state => prayersSelectors.getCheckedPrayersByColumnId(state, columnId));
  const uncheckedPrayers: IPrayer[] = useAppSelector(state => prayersSelectors.getUncheckedPrayersByColumnId(state, columnId));
  const isLoading = useAppSelector(prayersSelectors.isLodaing);
  const error = useAppSelector(prayersSelectors.getError);

  const [answeredVisible, setAnsweredVisible] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [curPrayerItem, setCurPrayerItem] = React.useState<IPrayer | null>(null);

  React.useEffect(() => {
    dispatch(prayersActions.getAllPrayersRequest());
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(prayersActions.getAllPrayersRequest());
  }, []);

  function handleSubmit() {
    if (!inputValue.trim()) {
      return;
    }
    if (curPrayerItem) {
      if (curPrayerItem.title === inputValue) {
        return;
      }
      dispatch(prayersActions.updatePrayer({
        ...curPrayerItem,
        title: inputValue,
      }));
      setCurPrayerItem(null);
    } else {
      dispatch(prayersActions.createPrayerRequest({
        title: inputValue,
        description: '',
        checked: false,
        columnId,
      }));
    }
    setInputValue('');
  }

  function closeRow(rowMap: RowMap<IPrayer>, rowKey: string) {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  }

  const InputComponent = (
    <View style={styles.inputWrapper}>
      <TouchableOpacity style={styles.inputBtn} onPress={() => {
        handleSubmit();
        inputRef.current?.blur();
      }}>
        <PlusLgSvg />
      </TouchableOpacity>
      <TextInput
        placeholder="Add a prayer..."
        placeholderTextColor="#9C9C9C"
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={handleSubmit}
        ref={inputRef}
        onBlur={() => {
          setCurPrayerItem(null);
          setInputValue('');
        }}
      />
    </View>
  );

  const HiddenItem = (data: ListRenderItemInfo<IPrayer>, rowMap: RowMap<IPrayer>) => (
    <View style={hiddenItemStyles.item}>
      <TouchableOpacity
        style={[hiddenItemStyles.btn, hiddenItemStyles.blueBg]}
        onPress={() => {
          closeRow(rowMap, `${data.item.id}`);
          inputRef.current?.focus();
          setInputValue(data.item.title);
          setCurPrayerItem(data.item);
        }}
      >
        <Text style={hiddenItemStyles.btnText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[hiddenItemStyles.btn, hiddenItemStyles.redBg]}
        onPress={() => {
          closeRow(rowMap, `${data.item.id}`);
          dispatch(prayersActions.deletePrayerById(data.item.id));
        }}
      >
        <Text style={hiddenItemStyles.btnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const AnsweredPrayersList = (
    <SwipeListView
      useFlatList={true}
      data={checkedPrayers}
      keyExtractor={item => `${item.id}`}
      renderItem={({ item }) => <PrayerItem prayer={item} />}
      ListEmptyComponent={<MessageBox text="There are no answered prayers" />}
      renderHiddenItem={HiddenItem}
      disableRightSwipe
      rightOpenValue={-140}
    />
  );

  const FooterComponent = (
    <>
      <View style={styles.buttonWrapper}>
        <Button
          text="Show answered prayers"
          customStyle={styles.button}
          customTextStyle={styles.buttonText}
          onPress={() => setAnsweredVisible(!answeredVisible)}
        />
      </View>
      {answeredVisible ? AnsweredPrayersList : null}
    </>
  );

  if (error) {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
      >
        <ErrorMessage text={error} />
      </ScrollView>
    );
  }

  return (
    <SwipeListView
      useFlatList={true}
      data={uncheckedPrayers}
      keyExtractor={item => `${item.id}`}
      style={styles.bgColor}
      refreshing={isLoading}
      onRefresh={onRefresh}
      keyboardShouldPersistTaps="handled"
      renderItem={({ item }) => <PrayerItem prayer={item} />}
      renderHiddenItem={HiddenItem}
      disableRightSwipe
      rightOpenValue={-140}
      ListEmptyComponent={<MessageBox text="There are no prayers" />}
      ListHeaderComponent={InputComponent}
      ListFooterComponent={FooterComponent}
    />
  );
};

const hiddenItemStyles = StyleSheet.create({
  item: {
    height: 68,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  redBg: {
    backgroundColor: '#AC5253',
  },
  blueBg: {
    backgroundColor: '#83b3c4',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '400',
  },
});

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  inputWrapper: {
    margin: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
  },
  inputBtn: {
    padding: 15,
    justifyContent: 'center',
  },
  input: {
    color: '#514D47',
    flex: 1,
    paddingVertical: 13,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#BFB393',
    borderRadius: 15,
    shadowColor: '#424e75',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
});

export default PrayersList;
