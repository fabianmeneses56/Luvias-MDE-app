import {StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {FAB} from 'react-native-paper';
import {Modal, Portal} from 'react-native-paper';
import {appColor} from '../../config/utils/constanst';

const FloatButtonsMap = () => {
  const [visibleInfo, setVisibleInfo] = useState(false);
  return (
    <>
      <FAB
        icon="information-outline"
        style={styles.fab}
        onPress={() => setVisibleInfo(true)}
        color="white"
        size="small"
      />
      <Portal>
        <Modal
          visible={visibleInfo}
          onDismiss={() => setVisibleInfo(false)}
          contentContainerStyle={styles.modalContentContainerStyle}
          style={styles.modal}
          dismissableBackButton>
          <Image source={require('../../assets/icons/infoRadar.png')} />
        </Modal>
      </Portal>
    </>
  );
};

export default FloatButtonsMap;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: appColor,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentContainerStyle: {
    width: 250,
  },
});
