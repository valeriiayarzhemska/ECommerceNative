import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    search: {
      marginBottom: 20,
    },
    carouselSlider: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
  });
};
