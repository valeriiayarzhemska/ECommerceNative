import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { SliderCatalog } from '../SliderCatalog';
import { CategoriesList } from '../CategoriesList';

import { filterProductsCategories } from '../../utils';

import { styles } from './style';

export const CatalogHeader = ({
  products,
  filteredProducts,
  setFilteredProducts,
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
          <View style={stylesShema.search}></View>

          <SliderCatalog
            productsCategories={productsCategories}
            setFilteredProducts={setFilteredProducts}
          />

          <CategoriesList
            productsCategories={productsCategories}
            setFilteredProducts={setFilteredProducts}
          />
        </View>
      )}
    </>
  );
};
