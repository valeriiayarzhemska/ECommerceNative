import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { filterProducts } from '../../utils';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/redux/features/products/productsSelectors';

export const sliderImages = {
  "jewelery": require(`../../assets/images/jewelery.jpg`),
  "electronics": require(`../../assets/images/electronics.jpg`),
  "men's clothing": require(`../../assets/images/mens_clothing.jpg`),
  "women's clothing": require(`../../assets/images/womens_clothing.jpg`),
  "all categories": require(`../../assets/images/all_categories.jpg`),
};

export const SliderItem = ({ title, category, setFilteredProducts }) => {
  const stylesShema = styles();
  const products = useSelector(selectProducts);

  const handleCategoryClick = () => {
    filterProducts(products, setFilteredProducts, category);
  }

  return (
    <TouchableOpacity style={stylesShema.container} onPress={handleCategoryClick}>
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
    </TouchableOpacity>
  );
};
