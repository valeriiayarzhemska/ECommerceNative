import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    errorContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    errorText: {
      color: '#ff0000',
      fontSize: 10,
      lineHeight: 10,
    },
  });
};
