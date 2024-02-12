import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '6%',
      width: '100%',
      height: '100%',
    },
    form: {
      position: 'relative',
      marginBottom: 8,
      width: '100%',
    },
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10%',
      width: 60,
      width: 60,
    },
    titleWrapper: {
      marginBottom: '6%',
    },
    title: {
      fontSize: 28,
      fontFamily: 'Lato-Bold',
      color: colors.darkGray,
    },
    errorContainer: {
      position: 'absolute',
      height: 22,
      bottom: Platform.OS === 'ios' ? '32%' : '27%',
      left: 22,
    },
  });
};
