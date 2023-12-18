import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { colors } from '../../constants';

export const CrossIcon = ({
  width = 24,
  height = 24,
  color = colors.darkGray,
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M16.293 17.707a1 1 0 001.414-1.414L11.414 10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293z"
    />
  </Svg>
);
