import { StyleSheet } from 'react-native';
import { colors, windowHeight } from '../../constants';

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
      top: windowHeight > 845 ? 56 : 40,
      right: '6%',
      left: '6%',
      zIndex: 1,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: windowHeight > 845 ? 94 : 86,
      marginBottom: 10,
      width: '100%',
    },
    ordersButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    orders: {
      marginTop: 10,
    },
    itemContainer: {
      paddingVertical: 14,
      borderBottomWidth: 1,
      borderBottomColor: colors.lightestGray,
    },
    titleContainer: {
      marginBottom: 16,
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
    },
    payment: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cashContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 6,
      height: 30,
      width: 50,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: colors.purple,
    },
    cash: {
      fontFamily: 'Lato-Bold',
      fontSize: 12,
      color: colors.purple,
    },
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    price: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    priceNumber: {
      fontFamily: 'Lato-Bold',
    },
    deliveryFeeContainer: {
      marginBottom: 8,
    },
    deliveryContent: {
      marginBottom: 8,
    },
    deliveryContainer: {
      marginBottom: 20,
    },
    userNameText: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
    },
    editButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 8,
      width: 120,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: colors.lightGray,
    },
    editButtonText: {
      marginLeft: 4,
      fontFamily: 'Lato-Regular',
      fontSize: 12,
      color: colors.darkGray,
    },
    checkoutButton: {
      marginBottom: 20,
    },
  });
};
