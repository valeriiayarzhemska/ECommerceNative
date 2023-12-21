import React from 'react';
import { Image, View, Text } from 'react-native';

import { styles } from './style';

export const slidersInfo = {
  "jewelery": {
    image: require(`../../assets/images/jewelery.jpg`),
    text: 'Promo: 1 + 1 = 3',
  },
  "electronics": {
    image: require(`../../assets/images/electronics.jpg`),
    text: 'Free product warranty',
  },
  "men's clothing": {
    image: require(`../../assets/images/mens_clothing.jpg`),
    text: 'Best choices for him',
  },
  "women's clothing": {
    image: require(`../../assets/images/womens_clothing.jpg`),
    text: 'Best choices for her',
  },
};

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
