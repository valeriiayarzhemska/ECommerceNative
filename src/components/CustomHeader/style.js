import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
    }
  });
};
