import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/redux/features/products/productsSelectors';

import { filterProducts } from '../../utils';

import { styles } from './style';

export const CategoriesItem = ({
  categoryItem,
  isLast,
  setFilteredProducts,
  setActiveCategory,
  selectedSortOption,
}) => {
  const stylesShema = styles();

  const [isActive, setIsActive] = useState(false);
  const products = useSelector(selectProducts);

  const handleCategoryClick = category => {
    filterProducts(products, setFilteredProducts, category, selectedSortOption);

    setIsActive(!isActive);
    setActiveCategory(category);
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
