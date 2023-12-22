import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    textContainerMargin: {
      marginRight: 6,
    },
    textContainer: {
      paddingVertical: 6,
      paddingHorizontal: 16,
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.green,
      borderRadius: 30,
    },
    textContainerActive: {
      backgroundColor: colors.green,
    },
    text: {
      fontFamily: 'Lato-Bold',
      fontSize: 14,
    },
  });
};
