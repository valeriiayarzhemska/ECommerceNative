import React from 'react';
import { Svg, Polygon } from 'react-native-svg';
import { colors } from '../../constants';

export const StarIcon = ({
  width = 24,
  height = 24,
  color = colors.darkGray,
}) => (
  <Svg
    height={height}
    width={width}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 53.867 53.867"
    xmlSpace="preserve"
  >
    <Polygon
      points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182"
      fill={color}
    />
  </Svg>
);
