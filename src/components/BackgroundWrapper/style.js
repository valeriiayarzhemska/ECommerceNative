import { StyleSheet } from 'react-native';
import { screenHeight, windowHeight } from '../../constants';

export const styles = (color = '#fff') => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      height: screenHeight,
    },
    background: {
      position: 'absolute',
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: color,
    },
    children: {
      position: 'relative',
      minHeight:
        windowHeight -
        (Platform.OS === 'ios' ? screenHeight - windowHeight + 50 : 25),
    },
  });
};
