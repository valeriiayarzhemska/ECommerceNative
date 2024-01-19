import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ButtonTemplate } from '../ButtonTemplate';
import { CrossIcon, PlusIcon } from '../../assets/icons';
import { colors } from '../../constants';

import { styles } from './style';
import { selectCartList, selectWishList } from '../../store/redux/features/products/productsSelectors';
import { setProductsWishList, updateProductsCartList } from '../../utils';
import { updateWishList } from '../../store/redux/features/products/productsActions';
import { useTranslation } from 'react-i18next';
import { setCartList } from '../../store/redux/features/products/productsSlice';

export const WishListItem = ({ product }) => {
  const stylesShema = styles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userCartList = useSelector(selectCartList);
  const userWishList = useSelector(selectWishList);
  const [isLiked, setIsLiked] = useState(
    userWishList.some(item => item.id === product.id),
  );

  const handleClick = id => {
    navigation.navigate('ProductDetails', {
      id: id,
      isLiked: isLiked,
      setIsLiked: setIsLiked,
      goFrom: 'WishListItem',
    });
  };

  const handleDeleteFromWishList = () => {
    setProductsWishList(product, userWishList, dispatch, updateWishList);
  };

  const handleAddToCart = async () => {
    setIsAddingLoading(true);

    try {
      updateProductsCartList(
        product,
        1,
        userCartList,
        dispatch,
        setCartList,
      );

      setShowAddedToCart(true);
      fadeIn();

      setIsAddingLoading(false);
    } catch (error) {
      console.log(error);
      setIsAddingLoading(false);
    }
  };

  return (
    <TouchableOpacity
      style={stylesShema.container}
      onPress={() => handleClick(product.id)}
    >
      <View style={stylesShema.imageContainer}>
        <Image style={stylesShema.image} source={{ uri: product.image }} />
      </View>

      <View style={stylesShema.content}>
        <View style={stylesShema.contentHeader}>
          <View style={stylesShema.titleContainer}>
            <Text style={stylesShema.title}>{product.title}</Text>
          </View>

          <View style={stylesShema.deleteButton}>
            <ButtonTemplate
              icon={CrossIcon}
              iconWidth={18}
              iconHeight={18}
              handleClick={handleDeleteFromWishList}
              isRounded={true}
              isRoundedSmall={true}
              isTransparent={true}
            />
          </View>
        </View>

        <View style={stylesShema.footer}>
          <View style={stylesShema.priceContainer}>
            <Text style={stylesShema.price}>&#36; {product.price}</Text>
          </View>

          <View style={stylesShema.cartButton}>
            <ButtonTemplate
              handleClick={handleAddToCart}
              text={t('addToCart')}
              isSmall={true}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
