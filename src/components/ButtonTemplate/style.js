import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const buttonSize = {
  small: 'small',
  medium: 'medium',
  big: 'big',
  full: 'full',
};

export const styles = (size, isProduct, isOutline, isSided, isRoundedSmall) => {
  return StyleSheet.create({
    container: {
      width: isSided ? 0 : '100%',
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
    buttonTransparent: {
      borderWidth: 0,
      backgroundColor: 'transparent',
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
