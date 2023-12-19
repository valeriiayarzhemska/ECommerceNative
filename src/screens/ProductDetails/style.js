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
    header: {
      position: 'absolute',
      top: 40,
      right: '6%',
      left: '6%',
      zIndex: 1,
    },
    imageContainer: {
      position: 'relative',
      marginBottom: 10,
      padding: 60,
      width: '100%',
      height: 370,
      backgroundColor: colors.white,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    content: {
      paddingVertical: 24,
      paddingHorizontal: '6%',
      height: '100%',
      backgroundColor: colors.lightestGray,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: colors.darkGray,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 5,
    },
    contentSkeleton: {
      marginVertical: 24,
      marginHorizontal: '6%',
      height: 300,
      width: '88%',
    },
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleContainer: {
      marginBottom: 18,
      width: '86%',
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 24,
      color: colors.darkGray,
    },
    priceContainer: {
      marginBottom: 14,
    },
    price: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.darkGray,
    },
    reviewsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 14,
    },
    starsContainer: {
      width: 106,
    },
    stars: {
      marginRight: 0,
      marginLeft: 0,
    },
    reviewContainer: {
      marginLeft: 2,
    },
    review: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.darkGray,
    },
    footer: {
      paddingTop: 16,
      paddingBottom: 30,
      paddingHorizontal: '6%',
      height: 156,
      backgroundColor: colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: colors.darkGray,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 5,
    },
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
    quantityInput: {
      paddingHorizontal: 4,
    },
    quantityButton: {
      paddingVertical: 11,
      paddingHorizontal: 17,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
  });
};
