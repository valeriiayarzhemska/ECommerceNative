import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    text: {
      color: colors.lightGray,
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      textAlign: 'center',
      marginBottom: 10,
    },
  });
};
