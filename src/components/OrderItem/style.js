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
    header: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
    },
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      width: '100%',
    },
    content: {
      width: '80%',
    },
    titleContainer: {
      marginRight: 10,
    },
    titleContainer: {
      marginBottom: 6,
    },
    title: {
      fontSize: 14,
      fontFamily: 'Lato-Bold',
      color: colors.darkGray,
    },
    priceContainer: {
      marginRight: 6,
    },
    price: {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      color: colors.darkGray,
    },
    quantity: {
      marginBottom: 8,
    },
    totalContainer: {
      marginRight: 6,
    },
    total: {
      fontSize: 16,
      fontFamily: 'Lato-Bold',
      color: colors.darkGray,
    },
    skeletonContainer: {
      flex: 1,
      width: '100%',
    },
    skeletonItem: {
      height: 189,
      marginBottom: 12,
      borderRadius: 20,
    },
  });
};
