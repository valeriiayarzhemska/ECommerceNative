import { StyleSheet } from 'react-native';
import { colors, containerWidth } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      width: containerWidth,
      flexDirection: 'row-reverse',
      zIndex: 3,
    },
    seacrhButton: {
      position: 'absolute',
      top: 4.5,
      paddingLeft: 5,
      zIndex: 4,
    },
    formContainer: {
      borderBottomEndRadius: 24,
      borderBottomStartRadius: 24,
      backgroundColor: colors.white,
      zIndex: 3,
    },
    resultsEmpty: {
      height: 96,
    },
    results: {
      position: 'absolute',
      top: 14,
      paddingTop: 34,
      width: '100%',
      minHeight: 134,
      maxHeight: 420,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      backgroundColor: colors.white,
      shadowColor: colors.darkGray,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 0.6,
      elevation: 1,
      zIndex: -1,
    },
  });
};
