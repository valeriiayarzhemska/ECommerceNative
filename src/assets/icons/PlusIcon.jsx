import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { colors } from '../../constants';

export const PlusIcon = ({
  width = 24,
  height = 24,
  color = colors.darkGray,
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
    />
  </Svg>
);
