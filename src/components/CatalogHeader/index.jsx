import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { ButtonTemplate } from '../ButtonTemplate';
import { Logo, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { Loader } from '../Loader';
import { CustomHeader } from '../CustomHeader';
import Carousel from 'react-native-snap-carousel';
import { filterProductsCategories } from '../../utils';
import { CategoriesCarousel } from '../CategoriesCarousel';

export const CatalogHeader = ({ products }) => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const productsCategories = filterProductsCategories(products);
  console.log('111111', productsCategories);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <CustomHeader
        isButtonLeft={true}
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

      <View style={stylesShema.container}>
        <View style={stylesShema.search}></View>

        <View>
        <Carousel
          layout={"default"}
          //ref={ref => this.carousel = ref}
          data={productsCategories}
          sliderWidth={300}
          itemWidth={300}
          renderItem={() => <CategoriesCarousel categories={productsCategories} />}
          //onSnapToItem = { index => this.setState({activeIndex:index}) }
        />
        </View>

        <View>
          <Text>Product categories slider</Text>
        </View>
      </View>
    </>
  );
};
