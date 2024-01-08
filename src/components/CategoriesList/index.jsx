import React from 'react';
import { FlatList, View } from 'react-native';
import { CategoriesItem } from '../CategoriesItem';

import { styles } from './style';

export const CategoriesList = ({
  productsCategories,
  setFilteredProducts,
  setActiveCategory,
  selectedSortOption,
}) => {
  const stylesShema = styles();

  return (
    <View style={stylesShema.listContainer}>
      <FlatList
        horizontal={true}
        data={productsCategories}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CategoriesItem
            categoryItem={item}
            isLast={index === productsCategories.length - 1}
            setFilteredProducts={setFilteredProducts}
            setActiveCategory={setActiveCategory}
            selectedSortOption={selectedSortOption}
          />
        )}
        keyExtractor={item => item.title}
        initialNumToRender={4}
      />
    </View>
  );
};
