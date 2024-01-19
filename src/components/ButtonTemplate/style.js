import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = (
  size,
  isOutline,
  isSided,
  isRoundedSmall,
) => {
  return StyleSheet.create({
    container: {
      width: isSided ? 0 : '100%',
    },
    containerHalf: {
      width: '48%',
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 14,
      paddingHorizontal: 24,
      paddingRight: isSided ? 38 : 24,
      width: '100%',
      borderRadius: 30,
      borderWidth: 2,
      borderTopLeftRadius: isSided ? 0 : 30,
      borderBottomLeftRadius: isSided ? 0 : 30,
      borderColor: isOutline ? colors.purple : 'transparent',
      backgroundColor: isOutline ? 'transparent' : colors.green,
    },
    buttonRounded: {
      paddingVertical: isRoundedSmall ? 3 : 5,
      paddingHorizontal: isRoundedSmall ? 3 : 5,
      paddingRight: 5,
      width: isRoundedSmall ? 35 : 45,
      borderRadius: 50,
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
      backgroundColor: isRoundedSmall ? colors.green : colors.lightestGray,
    },
    buttonSearch: {
      paddingVertical: 6,
      paddingHorizontal: 8,
      paddingRight: 8,
      width: 43,
    },
    buttonTransparent: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      paddingRight: 0,
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    buttonMiddle: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      paddingRight: 16,
      width: 86,
    },
    buttonSmall: {
      paddingVertical: 8,
      paddingHorizontal: 8,
      paddingRight: 8,
    },
    buttonDisabled: {
      backgroundColor: colors.lightGray,
    },
    text: {
      color: isOutline ? colors.purple : colors.darkGray,
      fontSize: 16,
      lineHeight: 15,
      textAlign: 'center',
      fontFamily: 'Lato-Bold',
    },
    textTransparent: {
      color: '#A165C9',
      lineHeight: 16,
    },
    textSmall: {
      fontSize: 14,
      lineHeight: 14,
    },
    icon: {
      width: '100%',
      paddingLeftt: isSided ? 20 : 0,
    },
    iconRounded: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
