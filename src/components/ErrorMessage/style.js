import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    errorContainer: {
      width: '100%',
      height: 20,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    errorText: {
      fontFamily: 'Lato-Regular',
      fontSize: 10,
      lineHeight: 20,
      color: colors.red,
    },
  });
};
