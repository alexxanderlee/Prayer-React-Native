import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TrashSvg, PencilSvg } from '../../../components/svg';
import { IColumn } from '../../../interfaces';

interface ContextMenuProps {
  currentColumn: IColumn;
  setCurrentColumn: (column: IColumn | null) => void;
  setModalVisible: (value: boolean) => void;
  onEdit: () => void;
  onDelete: (id: number) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  currentColumn,
  setCurrentColumn,
  setModalVisible,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      <TouchableOpacity style={styles.menuItem} onPress={() => {
        setModalVisible(false);
        onEdit();
      }}>
        <PencilSvg />
        <Text style={styles.menuItemText}>Edit column</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {
        setModalVisible(false);
        onDelete(currentColumn.id);
        setCurrentColumn(null);
      }}>
        <TrashSvg />
        <Text style={styles.menuItemText}>Delete column</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
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
