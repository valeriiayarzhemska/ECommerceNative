import React from 'react';
import { Image, View, Text } from 'react-native';

import { styles } from './style';

export const sliderImages = {
  jewelery: require(`../../assets/images/jewelery.jpg`),
  electronics: require(`../../assets/images/electronics.jpg`),
  "men's clothing": require(`../../assets/images/mens_clothing.jpg`),
  "women's clothing": require(`../../assets/images/womens_clothing.jpg`),
};

export const SliderItem = ({ title, category }) => {
  const stylesShema = styles();

  return (
    <View style={stylesShema.container}>
      <View style={stylesShema.imageContainer}>
        <Image
          style={stylesShema.image}
          source={sliderImages[category]}
          resizeMode="cover"
        />

        <View style={stylesShema.textContainer}>
          <Text style={stylesShema.text}>{title}</Text>
        </View>
      </View>
    </View>
  );
};
