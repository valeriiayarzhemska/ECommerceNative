import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    errorContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      color: '#ff0000',
      fontSize: 13,
      lineHeight: 13,
    },
  });
};
