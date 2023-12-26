import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ButtonTemplate } from '../ButtonTemplate';
import { HeartIcon, PlusIcon, StarIcon } from '../../assets/icons';
import { colors } from '../../constants';

import { styles } from './style';
import {
  selectProducts,
  selectWishList,
} from '../../store/redux/features/products/productsSelectors';
import { setProductsWishList, sliceProductTitle } from '../../utils';
import { updateWishList } from '../../store/redux/features/products/productsActions';

export const ProductsItem = ({ product }) => {
  const stylesShema = styles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { title, id, image, price, rating } = product;
  const userWishList = useSelector(selectWishList);
  const productTitle = sliceProductTitle(title);

  const handleClick = productId => {
    navigation.navigate('ProductDetails', {
      id: productId,
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
      onPress={() => handleClick(id)}
    >
      <View style={stylesShema.imageContainer}>
        <Image style={stylesShema.image} source={{ uri: image }} />

        <View style={stylesShema.favButton}>
          <ButtonTemplate
            icon={HeartIcon}
            iconColor={
              userWishList.some(item => item.id === id) ? colors.red : ''
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
          <View style={stylesShema.ratingContainer}>
            <StarIcon color={colors.yellow} width={16} height={16} />
            <Text style={stylesShema.ratingText}>{rating.rate}</Text>
          </View>

          <View style={stylesShema.priceContainer}>
            <Text style={stylesShema.price}>&#36; {price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
