import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    imageContainer: {
      width: 70,
      height: 70,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
    }
  });
};
