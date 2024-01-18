import React from 'react';
import { Modal, Text, Pressable, View } from 'react-native';

import { styles } from './style';
import { ButtonTemplate } from '../ButtonTemplate';

export const ModalWindow = ({
  isCheckOut,
  setIsCheckOut,
  modalText,
  secondModalText = '',
  closeText,
  handleCloseButtonClick,
}) => {
  const stylesShema = styles();

  return (
    <View style={stylesShema.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isCheckOut}
        onRequestClose={() => {
          setIsCheckOut(!isCheckOut);
        }}
      >
        <View style={stylesShema.centeredView}>
          <View style={stylesShema.modalView}>
            <View style={stylesShema.modalInfo}>
              <Text
                style={[
                  stylesShema.modalText,
                  secondModalText ? stylesShema.modalTextFirst : null,
                ]}
              >
                {modalText}
              </Text>

              {secondModalText && (
                <Text style={stylesShema.modalText}>{secondModalText}</Text>
              )}
            </View>

            <View style={stylesShema.button}>
              <ButtonTemplate
                text={closeText}
                handleClick={handleCloseButtonClick}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
