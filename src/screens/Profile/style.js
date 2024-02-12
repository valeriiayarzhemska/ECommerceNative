import { StyleSheet } from 'react-native';
import { colors, windowHeight } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: windowHeight,
      backgroundColor: colors.white,
    },
    containerScroll: {
      width: '100%',
      height: windowHeight,
      backgroundColor: colors.white,
    },
    containerFull: {
      minHeight: '100%',
      height: windowHeight - 160,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
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
      paddingVertical: 20,
      paddingHorizontal: '6%',
      height: '100%',
      backgroundColor: colors.lightestGray,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
    settingsWrapper: {
      marginBottom: 24,
    },
    settings: {
      backgroundColor: colors.white,
      borderRadius: 12,
    },
    titleContainer: {
      marginBottom: 8,
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: colors.darkGray,
    },
  });
};
