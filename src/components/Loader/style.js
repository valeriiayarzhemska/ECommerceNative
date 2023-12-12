import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      paddingHorizontal: '6%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginBottom: 5,
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      textAlign: 'center',
      color: colors.darkGray,
    },
    price: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      textAlign: 'center',
      color: colors.darkGray,
    },
  });
};
