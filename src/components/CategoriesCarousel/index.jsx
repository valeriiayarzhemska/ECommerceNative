import React from 'react';
import { Image, View, Text } from 'react-native';

import { styles } from './style';

export const CategoriesCarousel = ({ categories }) => {
  const stylesShema = styles();

  return (
    <View style={stylesShema.container}>
      {categories.map(({ title, image }) => (
        <View style={stylesShema.imageContainer}>
        <Image style={stylesShema.image} src={`build/src/assets/images/${image}.jpg`} />

        <View style={stylesShema.textContainer}>
          <Text style={stylesShema.text}>{title}</Text>
        </View>
      </View>
      ))}
    </View>
  );
};
