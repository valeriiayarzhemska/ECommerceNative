import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { colors } from '../../constants';

export const CheckIcon = ({
  color = colors.darkGray,
  width = 24,
  height = 24,
}) => (
  <Svg width={width} height={height} viewBox="0 0 1024 1024">
    <Path
      fill={color}
      d="M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192 600.384z"
    />
  </Svg>
);
