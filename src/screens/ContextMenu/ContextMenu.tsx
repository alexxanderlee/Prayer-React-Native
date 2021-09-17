import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { TrashSvg, PencilSvg } from '../../components/svg';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavParamsList } from '../../navigation/types';

interface ContextMenuProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'ContextMenu'>;
  route: RouteProp<AppNavParamsList, 'ContextMenu'>;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ navigation, route }) => {
  const { onEdit, onDelete } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.pop()}>
        <View style={styles.bgCover} />
      </TouchableWithoutFeedback>

      <View style={styles.menu}>

        <TouchableOpacity style={styles.menuItem} onPress={onEdit}>
          <PencilSvg />
          <Text style={styles.menuItemText}>Edit column</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            navigation.pop();
            onDelete();
          }}
        >
          <TrashSvg />
          <Text style={styles.menuItemText}>Delete column</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bgCover: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
  },
  menu: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  menuItem: {
    height: 50,
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 15,
    color: '#514D47',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
  },
});

export default ContextMenu;
