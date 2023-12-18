import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants';

const cardWidth = (Dimensions.get('window').width - 70) / 2;
const cardContentWidth = cardWidth - 20;
const cardImageHeight = cardWidth - 10;

export const styles = () => {
  return StyleSheet.create({
    container: {
      marginHorizontal: 6,
      marginBottom: 12,
      padding: 10,
      width: cardWidth,
      minHeight: 200,
      backgroundColor: colors.lightestGray,
      borderRadius: 20,
    },
    favButton: {
      position: 'absolute',
      top: 8,
      right: 3,
      zIndex: 1,
    },
    imageContainer: {
      position: 'relative',
      marginBottom: 10,
      padding: 20,
      width: cardContentWidth,
      height: cardImageHeight,
      backgroundColor: colors.white,
      borderRadius: 20,
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
      width: cardContentWidth,
    },
    title: {
      marginBottom: 10,
      fontSize: 14,
      fontFamily: 'Lato-Bold',
      color: colors.darkGray,
    },
    price: {
      fontSize: 14,
      fontFamily: 'Lato-Bold',
      color: colors.darkGray,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: cardContentWidth,
    },
  });
};
