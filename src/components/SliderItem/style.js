import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: 140,
      borderRadius: 30,
    },
    imageContainer: {
      width: '100%',
      height: '100%',
      borderRadius: 30,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 24,
    },
    textContainer: {
      position: 'absolute',
      right: 6,
      bottom: 6,
      paddingVertical: 8,
      paddingHorizontal: 18,
      backgroundColor: colors.green,
      borderRadius: 30,
    },
    text: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: colors.darkGray,
    }
  });
};
