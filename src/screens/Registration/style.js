import { StyleSheet } from 'react-native';
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
    backButton: {
      width: 24,
      height: 24,
      paddingHorizontal: '6%',
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
      textAlign: 'center',
      color: colors.darkGray,
    },
    dataButton: {
      marginTop: '6%',
    },
    datatTextWrapper: {
      marginBottom: '3%',
    },
    datatText: {
      fontSize: 18,
      fontFamily: 'Lato-Regular',
      color: colors.darkGray,
    },
    errorContainer: {
      position: 'absolute',
      bottom: '32%',
      left: 0,
      right: 0,
    },
  });
};
