import React from 'react';
import { View } from 'react-native';

import { SliderCatalog } from '../SliderCatalog';
import { CategoriesList } from '../CategoriesList';
import { SortList } from '../SortList';

import { filterProductsCategories } from '../../utils';

import { styles } from './style';

export const CatalogHeader = ({
  products,
  filteredProducts,
  setFilteredProducts,
  activeCategory,
  setActiveCategory,
  selectedSortOption,
  setSelectedSortOption,
}) => {
  const stylesShema = styles();
  const productsCategories = filterProductsCategories(products);

  return (
    <>
      {products && (
        <View style={stylesShema.container}>
          <SliderCatalog
            productsCategories={productsCategories}
            setFilteredProducts={setFilteredProducts}
          />

          <CategoriesList
            productsCategories={productsCategories}
            setFilteredProducts={setFilteredProducts}
            setActiveCategory={setActiveCategory}
            selectedSortOption={selectedSortOption}
          />

          <SortList
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            activeCategory={activeCategory}
            selectedSortOption={selectedSortOption}
            setSelectedSortOption={setSelectedSortOption}
          />
        </View>
      )}
    </>
  );
};
