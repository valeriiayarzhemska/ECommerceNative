import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { ButtonTemplate } from '../ButtonTemplate';
import { Logo, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { Loader } from '../Loader';
import { CustomHeader } from '../CustomHeader';
import Carousel from 'react-native-snap-carousel';
import { filterProductsCategories } from '../../utils';
import { SliderItem } from '../SliderItem';
import { SliderCatalog } from '../SliderCatalog';
import { CategoriesList } from '../CategoriesList';

const windowWidth = Dimensions.get('window').width;

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
      <CustomHeader
        isButtonLeft= {true}
        buttonLeft={<Logo width={40} height={40} />}
        isButtonRight={true}
        buttonRight={
          <ButtonTemplate
            icon={UserIcon}
            iconWidth={30}
            iconHeight={30}
            handleClick={handleLogOut}
            isRounded={true}
          />
        }
      />

      {products && (
        <View style={stylesShema.container}>
          <View style={stylesShema.search}></View>

          <SliderCatalog productsCategories={productsCategories} />

          <CategoriesList
            productsCategories={productsCategories}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          />
        </View>
      )}
    </>
  );
};
