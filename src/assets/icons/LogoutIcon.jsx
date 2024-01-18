import React from 'react';
import { Svg, Path, Polyline, Line } from 'react-native-svg';
import { colors } from '../../constants';

export const LogoutIcon = ({
  color = colors.darkGray,
  width = 24,
  height = 24,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M320,176V136a40,40,0,0,0-40-40H88a40,40,0,0,0-40,40V376a40,40,0,0,0,40,40H280a40,40,0,0,0,40-40V336"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <Polyline
      points="384 176 464 256 384 336"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <Line
      x1="191"
      y1="256"
      x2="464"
      y2="256"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </Svg>
);
