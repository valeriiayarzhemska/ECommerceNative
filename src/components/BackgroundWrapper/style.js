import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      height: '100%',
      backgroundColor: '#fff',
    },
    children: {
      position: 'relative',
      zIndex: 2,
      height: '100%',
    },
  });
};
