import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 14,
      paddingHorizontal: 18,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: colors.lightestGray,
      borderRadius: 20,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
    },
    imageContainer: {
      width: 60,
      height: 70,
      marginRight: 16,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    titleContainer: {
      marginBottom: 2,
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 14,
      color: colors.darkGray,
    },
    reviewsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    starContainer: {
      width: 106,
    },
    stars: {
      marginRight: 0,
      marginLeft: 0,
    },
    review: {
      fontFamily: 'Lato-Light',
      fontSize: 12,
      color: colors.darkGray,
    },
    price: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: colors.darkGray,
    },
  });
};
