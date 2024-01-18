import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalView: {
      backgroundColor: colors.white,
      borderRadius: 20,
      padding: 30,
      alignItems: 'center',
    },
    modalInfo: {},
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
    },
    modalText: {
      textAlign: 'center',
    },
    modalTextFirst: {
      marginBottom: 6,
    },
    button: {
      width: 120,
      marginTop: 12,
    },
  });
};
