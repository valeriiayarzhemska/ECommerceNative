import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    cancelButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 2,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalView: {
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingTop: 40,
      paddingBottom: 20,
      paddingHorizontal: 30,
      alignItems: 'center',
    },
    modalRadioButtons: {
      alignItems: 'flex-start',
    },
    modalTitle: {
      marginBottom: 10,
    },
    modalTitleText: {
      maxWidth: 300,
      fontFamily: 'Lato-Bold',
      fontSize: 18,
    },
    modalText: {
      textAlign: 'center',
      color: colors.darkGray,
    },
    modalTextSecond: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    modalTextAdditional: {
      marginBottom: 8,
    },
    button: {
      width: 120,
      marginTop: 12,
    },
  });
};
