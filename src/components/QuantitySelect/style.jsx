import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    quantitySelect: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 16,
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
    },
    quantityButton: {
      alignItems: 'center',
      paddingVertical: 11,
      paddingHorizontal: 17,
      width: 40,
    },
  });
};
