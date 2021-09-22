import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useAppDispatch } from '../../../state/hooks';
import { columnsActions } from '../../../state/features/columns';
import { PlusLgSvg } from '../../../components/svg';
import { IColumn } from '../../../interfaces';

interface ModalInputProps {
  currentColumn: IColumn | null;
  setCurrentColumn: (column: IColumn | null) => void;
  setModalVisible: (vale: boolean) => void;
}

const ModalInput: React.FC<ModalInputProps> = ({ currentColumn, setCurrentColumn, setModalVisible }) => {
  const dispatch = useAppDispatch();

  const inputRef = React.useRef<TextInput>(null);
  const [value, setValue] = React.useState<string>(currentColumn ? currentColumn.title : '');

  function createNewColumn(title: string) {
    dispatch(columnsActions.createCololumnRequset({ title, description: '' }));
  }

  function editColumn(title: string) {
    dispatch(columnsActions.updateColumnRequest({
      title,
      description: currentColumn!.description,
      columnId: currentColumn!.id,
    }));
  }

  function handleSubmit() {
    if (!value.trim()) {
      return;
    }
    if (currentColumn) {
      editColumn(value);
    } else {
      createNewColumn(value);
    }
    setModalVisible(false);
    setCurrentColumn(null);
  }

  React.useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  return (
    <View style={styles.inputWrapper}>
      <TouchableOpacity style={styles.inputBtn} onPress={handleSubmit}>
        <PlusLgSvg />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter a column title"
        placeholderTextColor="#9C9C9C"
        value={value}
        onChangeText={val => setValue(val)}
        ref={inputRef}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
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
});

export default ModalInput;
