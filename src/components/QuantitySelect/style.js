import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    quantitySelect: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.lightGray,
      borderRadius: 10,
    },
    quantity: {
      fontFamily: 'Lato-Bold',
      fontSize: 14,
      color: colors.darkGray,
    },
    quantityInputContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
    },
    quantityInput: {
      paddingHorizontal: 4,
      paddingLeft: Platform.OS === 'ios' ? 4 : 13,
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.darkGray,
    },
    quantityButton: {
      alignItems: 'center',
      paddingVertical: 11,
      paddingHorizontal: 17,
      width: 40,
    },
  });
};
