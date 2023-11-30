import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const buttonSize = {
  small: 'small',
  medium: 'medium',
  big: 'big',
  full: 'full',
};

export const styles = (size, isProduct, isOutline) => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 14,
      paddingHorizontal: 24,
      width: '100%',
      borderRadius: 30,
      borderWidth: 2,
      borderColor: isOutline ? colors.purple : 'transparent',
      backgroundColor: isOutline ? 'transparent' : colors.green,
    },
    buttonTransparent: {
      borderWidth: 2,
      borderColor: '#A165C9',
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
      marginRight: 8,
    },
  });
};
