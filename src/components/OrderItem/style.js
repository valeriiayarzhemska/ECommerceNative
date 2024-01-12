import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 10,
      padding: 10,
      width: '100%',
      minHeight: 130,
      backgroundColor: colors.lightestGray,
      borderRadius: 20,
    },
    imageContainer: {
      position: 'relative',
      marginRight: 10,
      padding: 20,
      width: 70,
      height: 80,
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
      marginBottom: 8,
      paddingBottom: 20,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: colors.lightGray,
    },
    content: {
      width: '100%',
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
      fontFamily: 'Lato-Bold',
      color: colors.darkGray,
    },
  });
};
