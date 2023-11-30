import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants';

export const styles = error => {
  return StyleSheet.create({
    inputWrapper: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      paddingVertical: 14,
      paddingHorizontal: 18,
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.darkGray,
      borderWidth: 1,
      borderColor: error ? colors.red : colors.lightGray,
      borderRadius: 30,
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
    /* icon: {
      width: 16,
      height: 16,
      marginLeft: 20,
    },
    eyeIcon: {
      padding: 14,
    },
    searchIcon: {
      backgroundColor: '#BF87E3',
      height: '100%',
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      width: 46,
      height: 46,
      justifyContent: 'center',
      alignItems: 'center',
    }, */
  });
};
