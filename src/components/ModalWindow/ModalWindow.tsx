import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
  StatusBar,
  Modal,
} from 'react-native';

interface ModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  onClose?: () => void;
  contentAlign?: 'flex-start' | 'center' | 'flex-end';
}

const ModalWindow: React.FC<ModalProps> = ({ visible, setVisible, children, onClose, contentAlign = 'flex-start' }) => {
  const containerStyle = [styles.container, { justifyContent: contentAlign }];

  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      statusBarTranslucent
    >
      <SafeAreaView style={containerStyle}>
        <TouchableWithoutFeedback onPress={() => {
          setVisible(false);
          onClose && onClose();
        }}>
          <View style={styles.bgCover} />
        </TouchableWithoutFeedback>
        <View style={styles.contentWrapper}>
          {children}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
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
});

export default ModalWindow;
