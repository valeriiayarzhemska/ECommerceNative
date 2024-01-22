import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = isRed => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 14,
      borderBottomWidth: 1,
      borderBottomColor: colors.lightestGray,
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 14,
    },
    title: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: isRed ? colors.red : colors.darkGray,
    },
    modalContainer: { position: 'absolute' },
  });
};
