import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: colors.white,
    },
    list: {
      justifyContent: 'space-between'
    },
    listContent: {
      paddingHorizontal: '6%',
    },
  });
};
