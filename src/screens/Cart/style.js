import { StyleSheet } from 'react-native';
import { colors, windowHeight, windowWidth } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.white,
    },

    containerList: { height: windowHeight - 210 },
    listContent: {
      paddingHorizontal: '6%',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 26,
      paddingHorizontal: '6%',
      width: windowWidth,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      backgroundColor: colors.white,
      zIndex: 1,
    },
    buttonContainer: {
      paddingTop: 16,
      paddingBottom: 20,
      width: '45%',
    },
    totalPriceText: {
      marginRight: 10,
      fontFamily: 'Lato-Bold',
      fontSize: 16,
    },
  });
};
