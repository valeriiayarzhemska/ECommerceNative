import { StyleSheet } from 'react-native';
import { colors, containerWidth } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: colors.white,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 14,
      width: '100%',
    },
    contentContainer: {
      alignItems: 'center',
      width: '100%',
    },
    avatar: {
      marginBottom: 20,
      padding: 14,
      width: 88,
      backgroundColor: colors.lightestGray,
      borderRadius: 50,
    },
    nameContainer: {
      marginBottom: 8,
    },
    name: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.darkGray,
    },
    marginBottom: 8,
    emailContainer: {
      marginBottom: 30,
    },
    email: {
      fontFamily: 'Lato-Light',
      fontSize: 14,
      color: colors.darkGray,
    },
    settingsContainer: {
      paddingHorizontal: '6%',
      height: '100%',
      backgroundColor: colors.lightestGray,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
    },
  });
};
