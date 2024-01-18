import { StyleSheet } from 'react-native';
import { colors, windowHeight, windowWidth } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.white,
    },
    containerList: { height: '82%'  },
    listContent: {
      paddingHorizontal: '6%',
    },
    footer: {
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: '6%',
      paddingBottom: windowHeight < 700 ? '8%' : 0,
      width: windowWidth,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      backgroundColor: colors.white,
      zIndex: 1,
    },
    buttonContainer: {
      paddingTop: 16,
      paddingBottom: '2%',
      width: '45%',
    },
    totalPriceText: {
      marginRight: 10,
      fontFamily: 'Lato-Bold',
      fontSize: 16,
    },
  });
};
