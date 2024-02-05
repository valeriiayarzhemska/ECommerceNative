import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleContainer: {
      marginRight: 8,
    },
    title: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.darkGray,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 10,
      minWidth: 146,
      backgroundColor: colors.white,
      borderWidth: 2,
      borderColor: colors.lightestGray,
      borderRadius: 5,
    },
    input: {
      marginRight: 6,
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.darkGray,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      width: '100%',
    },
    pickerStyles: {
      width: '100%',
      backgroundColor: colors.white,
    },
  });
};
