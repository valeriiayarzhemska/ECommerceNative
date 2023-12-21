import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { SliderItem } from '../SliderItem';
import { containerWidth } from '../../constants';

import { styles } from './style';

export const SliderCatalog = ({ productsCategories, setFilteredProducts }) => {
  const stylesShema = styles();

  const allCategories = productsCategories.push('all catrgories');

  return (
    <View style={stylesShema.carouselSlider}>
      <Carousel
        layout={'default'}
        data={productsCategories}
        containerCustomStyle={styles.carouselContainer}
        sliderWidth={containerWidth}
        itemWidth={containerWidth}
        renderItem={({ item }) => (
          <SliderItem
            category={item.category}
            title={item.title}
            setFilteredProducts={setFilteredProducts}
          />
        )}
      />
    </View>
  );
};
