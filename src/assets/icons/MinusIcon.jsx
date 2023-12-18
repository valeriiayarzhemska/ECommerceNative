import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { colors } from '../../constants';

export const MinusIcon = ({
  width = 24,
  height = 24,
  color = colors.darkGray,
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M18 10a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1z"
    />
  </Svg>
);
