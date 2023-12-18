import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { SliderItem } from '../SliderItem';

import { styles } from './style';
import { CategoriesItem } from '../CategoriesItem';

const windowWidth = Dimensions.get('window').width;
const sliderWidth = windowWidth - (windowWidth / 100) * 12;

export const CategoriesList = ({
  productsCategories,
  filteredProducts,
  setFilteredProducts,
}) => {
  const stylesShema = styles();

  return (
    <View style={stylesShema.listContainer}>
      <FlatList
        horizontal={true}
        data={productsCategories}
        renderItem={({ item, index }) => (
          <CategoriesItem
            categoryItem={item}
            isLast={index === productsCategories.length - 1}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            productsCategories={productsCategories}
          />
        )}
        keyExtractor={item => item.title}
        initialNumToRender={4}
      />
    </View>
  );
};
