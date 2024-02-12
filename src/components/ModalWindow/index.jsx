import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { ButtonTemplate } from '../ButtonTemplate';
import { RadioButtonsTemplate } from '../RadioButtonsTemplate';
import { CrossIcon } from '../../assets/icons';

import { styles } from './style';

export const ModalWindow = ({
  isClicked,
  setIsClicked,
  title = '',
  modalText = '',
  secondModalText = '',
  closeText,
  isRadioButtons = false,
  radioButtons = [],
  selectedRadioButton = '',
  setSelectedRadioButton,
  handleOkButtonClick,
}) => {
  const stylesShema = styles();

  return (
    <View style={stylesShema.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isClicked}
        onRequestClose={() => {
          setIsClicked(!isClicked);
        }}
      >
        <View style={stylesShema.centeredView}>
          <View style={stylesShema.modalView}>
            <TouchableOpacity
              style={stylesShema.cancelButton}
              onPress={() => {
                setIsClicked(!isClicked);
              }}
              hitSlop={{ top: 14, bottom: 14, left: 14, right: 14 }}
            >
              <CrossIcon width={18} height={18} />
            </TouchableOpacity>

            {isRadioButtons ? (
              <View style={stylesShema.modalRadioButtons}>
                <View style={stylesShema.modalTitle}>
                  <Text style={stylesShema.modalTitleText}>{title}</Text>
                </View>

                <View style={stylesShema.radioButtons}>
                  <RadioButtonsTemplate
                    radioButtons={radioButtons}
                    selectedId={selectedRadioButton}
                    setSelectedId={setSelectedRadioButton}
                  />
                </View>
              </View>
            ) : (
              <View style={stylesShema.modalInfo}>
                <Text
                  style={[
                    stylesShema.modalText,
                    stylesShema.modalTitleText,
                    secondModalText ? stylesShema.modalTextAdditional : null,
                  ]}
                >
                  {modalText}
                </Text>

                {secondModalText && (
                  <Text
                    style={[stylesShema.modalText, stylesShema.modalTextSecond]}
                  >
                    {secondModalText}
                  </Text>
                )}
              </View>
            )}

            <View style={stylesShema.button}>
              <ButtonTemplate
                text={closeText}
                handleClick={handleOkButtonClick}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
