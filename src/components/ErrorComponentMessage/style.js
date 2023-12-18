import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    errorContainer: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      textAlign: 'center',
      color: colors.darkGray,
    },
  });
};
