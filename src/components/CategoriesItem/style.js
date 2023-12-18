import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: 140,
      borderRadius: 30,
    },
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
