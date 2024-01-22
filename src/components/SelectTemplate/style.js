import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    
    dropdownButton: {
      position: 'relative',
      marginBottom: 20,
      paddingHorizontal: 18,
      width: '100%',
      borderWidth: 1,
      borderRadius: 30,
      backgroundColor: colors.white,
      borderColor: colors.lightGray,
    },
    dropdownButtonDisabled: {
      borderColor: colors.lightestGray,
    },
    dropdownButtonText: {
      marginHorizontal: 0,
      textAlign: 'left',
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.darkGray,
    },
    dropdownButtonTextDisabled: {
      color: colors.lightGray,
    },
    dropdownSelectedText: {
      color: colors.darkGray,
    },
    dropdown: {
      width: '88%',
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.lightGray,
      borderRadius: 30,
    },
    dropdownRow: {},
    dropdownRowText: {},
    errorWrapper: {
      position: 'absolute',
      top: 52,
    },
    errorText: {
      fontFamily: 'Lato-Regular',
      fontSize: 10,
      color: colors.red,
    },
  });
};
