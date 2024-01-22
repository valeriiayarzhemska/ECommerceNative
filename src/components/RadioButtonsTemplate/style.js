import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'flex-start',
    },
    itemContainer: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.darkGray,
    },
  });
};
