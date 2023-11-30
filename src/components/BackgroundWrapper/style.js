import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const SCREEN_HEIGHT = Dimensions.get('screen').height;


export const styles = (color = '#fff') => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      height: SCREEN_HEIGHT,
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
      minHeight: WINDOW_HEIGHT - (Platform.OS === 'ios' ? SCREEN_HEIGHT - WINDOW_HEIGHT + 50 : 25),
      /* justifyContent: 'center',
      alignItems: 'center', */
    },
  });
};
