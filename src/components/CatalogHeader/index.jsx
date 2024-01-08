import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { SliderCatalog } from '../SliderCatalog';
import { CategoriesList } from '../CategoriesList';

import { filterProductsCategories } from '../../utils';

import { styles } from './style';
import { SortList } from '../SortList';

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
  const dispatch = useDispatch();
  const productsCategories = filterProductsCategories(products);

  const handleLogOut = () => {
    dispatch(logout());
  };

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
