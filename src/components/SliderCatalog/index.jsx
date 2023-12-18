import React from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { SliderItem } from '../SliderItem';

import { styles } from './style';

const windowWidth = Dimensions.get('window').width;
const sliderWidth = windowWidth - (windowWidth / 100) * 12;

export const SliderCatalog = ({ productsCategories }) => {
  const stylesShema = styles();

  return (
    <View style={stylesShema.carouselSlider}>
      <Carousel
        layout={'default'}
        data={productsCategories}
        containerCustomStyle={styles.carouselContainer}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        renderItem={({ item }) => (
          <SliderItem category={item.category} title={item.title} />
        )}
      />
    </View>
  );
};
