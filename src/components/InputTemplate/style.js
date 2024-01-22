import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = (error, icon, isSearch) => {
  return StyleSheet.create({
    inputWrapper: {
      flexDirection: 'row',
      marginBottom: isSearch ? 0 : 20,
      width: '100%',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingVertical: 14,
      paddingHorizontal: 18,
      paddingLeft: 18,
      paddingLeft: isSearch && !icon ? 50 : 18,
      paddingRight: isSearch && !icon ? 96 : 18,
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.darkGray,
      borderWidth: 1,
      borderColor: error ? colors.red : colors.lightGray,
      borderRadius: 30,
      backgroundColor: colors.white,
    },
    inputIcon: {
      paddingLeft: 42,
    },
    icon: {
      position: 'absolute',
      left: 18,
      zIndex: 10,
    },
    eyeIcon: {
      position: 'absolute',
      right: 18,
    },
    errorWrapper: {
      position: 'absolute',
      top: 50,
    },
    errorText: {
      fontFamily: 'Lato-Regular',
      fontSize: 10,
      color: colors.red,
    },
  });
};
