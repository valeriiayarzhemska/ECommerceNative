import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      zIndex: 2,
    },
    containerSearch: {
      position: 'absolute',
      width: '100%',
      zIndex: 10,
    },
    carouselSlider: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
  });
};
