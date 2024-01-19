import React from 'react';
import { Svg, Circle, Path } from 'react-native-svg';
import { colors } from '../../constants';

export const UserDeleteIcon = ({
  color = colors.darkGray,
  width = 16,
  height = 16,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx="10" cy="6" r="4" stroke={color} strokeWidth="1.5" />
    <Path
      d="M20.4141 11.4142L18.9999 10M18.9999 10L17.5857 8.5858M18.9999 10L20.4141 8.58578M18.9999 10L17.5857 11.4142"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);
