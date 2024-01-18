import { StyleSheet, Platform } from 'react-native';
import { colors, windowHeight } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: colors.white,
    },
    listContent: {
      paddingHorizontal: '6%',
      paddingBottom: windowHeight < 700 ? '8%' : 0,
    },
  });
};
