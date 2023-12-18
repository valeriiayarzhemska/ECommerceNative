import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/redux/features/products/productsSelectors';

import { styles } from './style';
import { filterProducts } from '../../utils';

export const CategoriesItem = ({
  categoryItem,
  isLast,
  filteredProducts,
  setFilteredProducts,
  productsCategories,
}) => {
  const stylesShema = styles();

  const [isActive, setIsActive] = useState(false);
  const products = useSelector(selectProducts);

  const handleCategoryClick = category => {
    setIsActive(!isActive);
    filterProducts(products, filteredProducts, setFilteredProducts, category, productsCategories);
  };

  return (
    <TouchableOpacity
      style={[
        stylesShema.textContainer,
        !isLast ? stylesShema.textContainerMargin : null,
        isActive ? stylesShema.textContainerActive : null,
      ]}
      onPress={() => handleCategoryClick(categoryItem.category)}
    >
      <Text style={stylesShema.text}>{categoryItem.title}</Text>
    </TouchableOpacity>
  );
};
