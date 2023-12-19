import React from 'react';
import { View } from 'react-native';
import { SearchIcon } from '../../assets/icons';

import { styles } from './style';

export const SearchInputIcon = () => {
  const stylesShema = styles();

  return (
    <View style={stylesShema.container}>
      <SearchIcon />
    </View>
  );
};
