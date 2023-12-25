import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 12,
      padding: 10,
      width: '100%',
      minHeight: 130,
      backgroundColor: colors.lightestGray,
      borderRadius: 20,
    },
    containerSkeleton: {
      width: '100%',
    },
    imageContainer: {
      position: 'relative',
      marginRight: 14,
      padding: 20,
      width: 110,
      height: 110,
      backgroundColor: colors.white,
      borderRadius: 14,
    },
    image: {
      zIndex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
    },
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    titleContainer: {
      marginRight: 10,
      width: '80%',
    },
    title: {
      marginBottom: 10,
      fontSize: 14,
      fontFamily: 'Lato-Bold',
      color: colors.darkGray,
    },
    priceContainer: {
      marginRight: 6,
    },
    price: {
      fontSize: 16,
      fontFamily: 'Lato-Bold',
      color: colors.darkGray,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    cartButton: {
      width: '50%',
    },
  });
};
