import { Dimensions } from 'react-native';

export const colors = {
  lightestGray: '#f7f7f7',
  lightGray: '#C6C6C6',
  gray: '#202020',
  darkGray: '#050404',
  purple: '#B3B0FF',
  green: '#AFFC40',
  red: '#ff0000',
  white: '#fff',
  yellow: '#FFDF00',
};

export const windowWidth = Dimensions.get('window').width;
export const containerWidth = windowWidth - (windowWidth / 100) * 12;
