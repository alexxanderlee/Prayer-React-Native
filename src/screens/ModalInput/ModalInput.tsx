import React from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavParamsList } from '../../navigation/types';
import { PlusLgSvg } from '../../components/svg';

interface ModalInputProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'ModalInput'>;
  route: RouteProp<AppNavParamsList, 'ModalInput'>;
}

const ModalInput: React.FC<ModalInputProps> = ({ navigation, route }) => {
  const { onSubmit, initialValue } = route.params;
  const inputRef = React.useRef<TextInput>(null);
  const [value, setValue] = React.useState<string>(initialValue);

  function handleSubmit() {
    if (!value.trim()) {
      return;
    }
    onSubmit(value);
    navigation.pop();
    setValue('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.pop()}>
        <View style={styles.bgCover} />
      </TouchableWithoutFeedback>
      <View style={styles.contentWrapper}>
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
            autoFocus
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bgCover: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
  },
  contentWrapper: {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
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
