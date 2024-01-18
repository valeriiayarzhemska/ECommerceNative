import React from 'react';
import { Image, View, Text } from 'react-native';
import { slidersInfo } from './slidersInfo';

import { styles } from './style';

export const SliderItem = ({ category }) => {
  const stylesShema = styles();

  return (
    <View style={stylesShema.container}>
      <View style={stylesShema.imageContainer}>
        <Image
          style={stylesShema.image}
          source={slidersInfo[category].image}
          resizeMode="cover"
        />

        <View style={stylesShema.textContainer}>
          <Text style={stylesShema.text}>{slidersInfo[category].text}</Text>
        </View>
      </View>
    </View>
  );
};
