import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    errorContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    errorText: {
      fontFamily: 'Lato-Regular',
      fontSize: 10,
      lineHeight: 10,
      color: colors.red,
    },
  });
};
