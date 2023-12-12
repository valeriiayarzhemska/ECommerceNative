import React from 'react';
import { FlatList, Text } from 'react-native';
import { ProductsItem } from '../ProductsItem';


export const ProductsList = ({ products }) => {
  return (
    <FlatList 
      data={products}
      renderItem={({ item }) => <ProductsItem product={item} />}
      keyExtractor={item => item.id}
    />
  );
};
