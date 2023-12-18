import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ButtonTemplate } from '../ButtonTemplate';
import { HeartIcon, PlusIcon } from '../../assets/icons';
import { colors } from '../../constants';

import { styles } from './style';
import { selectProducts, selectWishList } from '../../store/redux/features/products/productsSelectors';
import { setProductsWishList, sliceProductTitle } from '../../utils';
import { updateWishList } from '../../store/redux/features/products/productsActions';

export const ProductsItem = ({ product }) => {
  const stylesShema = styles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userWishList = useSelector(selectWishList);
  const productTitle = sliceProductTitle(product.title);

  const handleClick = id => {
    navigation.navigate('ProductDetails', {
      id: id,
      goFrom: 'ProductsItem',
    });
  };

  const handleAddToWishList = () => {
    setProductsWishList(product, userWishList, dispatch, updateWishList);
  };

  const handleAddToCart = () => {};

  return (
    <TouchableOpacity
      style={stylesShema.container}
      onPress={() => handleClick(product.id)}
    >
      <View style={stylesShema.imageContainer}>
        <Image style={stylesShema.image} source={{ uri: product.image }} />

        <View style={stylesShema.favButton}>
          <ButtonTemplate
            icon={HeartIcon}
            iconColor={
              userWishList.some(item => item.id === product.id)
                ? colors.red
                : ''
            }
            iconWidth={18}
            iconHeight={18}
            handleClick={handleAddToWishList}
            isRounded={true}
            isRoundedSmall={true}
            isTransparent={true}
          />
        </View>
      </View>

      <View style={stylesShema.content}>
        <View style={stylesShema.titleContainer}>
          <Text style={stylesShema.title}>{productTitle}</Text>
        </View>

        <View style={stylesShema.footer}>
          <View style={stylesShema.priceContainer}>
            <Text style={stylesShema.price}>&#36; {product.price}</Text>
          </View>

          <View>
            <ButtonTemplate
              icon={PlusIcon}
              iconWidth={15}
              handleClick={handleAddToCart}
              isRounded={true}
              isRoundedSmall={true}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
