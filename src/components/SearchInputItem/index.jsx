import React, { useState } from 'react';
import { Dimensions, FlatList, ScrollViewComponent, ScrollView, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { ButtonTemplate } from '../ButtonTemplate';
import { Logo, SearchIcon, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { CustomHeader } from '../CustomHeader';
import { filterProductsCategories } from '../../utils';
import { SliderCatalog } from '../SliderCatalog';
import { CategoriesList } from '../CategoriesList';
import SearchBar from '@pnap/react-native-search-bar';
import { colors } from '../../constants';
import { SearchInputIcon } from '../SearchInputIcon';

export const SearchInputItem = ({ product }) => {
  const stylesShema = styles();
  const [isSeacrhActive, setIsSearchActive] = useState(false);
  const dispatch = useDispatch();

  const onSubmitSearch = () => {};

  const onActiveSearch = () => {};

  const onToggleSearchBar = () => {};

  return (
    <View style={stylesShema.container}>
      <Text>
        {product.title}
      </Text>
    </View>
  );
};
