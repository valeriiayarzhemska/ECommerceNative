import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: colors.white,
    },
    containerContent: { paddingHorizontal: '6%' },
    header: {
      position: 'absolute',
      top: 40,
      right: '6%',
      left: '6%',
      zIndex: 1,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 86,
      width: '100%',
    },
    editButton: {
    },
  });
};
