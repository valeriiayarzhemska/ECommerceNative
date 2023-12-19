import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: '83%',
      width: '100%',
    },
    searchButton: {
      paddingVertical: 13,
      paddingHorizontal: 16,
      backgroundColor: colors.purple,
      borderRadius: 10,
    },
    searchButtonText: {
      fontFamily: 'Lato-Bold',
      fontSize: 14,
    },
  });
};
