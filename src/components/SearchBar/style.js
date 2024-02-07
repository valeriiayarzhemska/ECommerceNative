import { Platform, StyleSheet } from 'react-native';
import { colors, containerWidth } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    outerContainer: {
      flex: 1,
      marginLeft: -23,
    },
    container: {
      position: 'absolute',
      width: containerWidth,
      flexDirection: 'row-reverse',
      zIndex: 3,
    },
    formContainer: {
      position: 'absolute',

    },
    seacrhButton: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? 4.5 : 12,
      paddingLeft: 5,
      zIndex: 4,
    },
    formContainer: {
      borderBottomEndRadius: 24,
      borderBottomStartRadius: 24,
      backgroundColor: colors.white,
      zIndex: 3,
    },
    form: {
      marginTop: Platform.OS === 'ios' ? 0 : 8,
      height: Platform.OS === 'ios' ? 'auto' : 48,
      zIndex: 2,
    },
    cancelButton: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? 4.5 : 12,
      right: 5,
      zIndex: 3
    },
    resultsEmpty: {
      height: 96,
    },
    results: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? 14 : 26,
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
      zIndex: 1,
      elevation: 1,
    },
  });
};
