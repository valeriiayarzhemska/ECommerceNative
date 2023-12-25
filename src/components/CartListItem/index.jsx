import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ButtonTemplate } from '../ButtonTemplate';
import { CrossIcon, PlusIcon } from '../../assets/icons';
import { colors } from '../../constants';

import { styles } from './style';
import { selectCartList } from '../../store/redux/features/products/productsSelectors';
import { setProductsWishList } from '../../utils';
import { updateWishList } from '../../store/redux/features/products/productsActions';
import { useTranslation } from 'react-i18next';
import { QuantitySelect } from '../QuantitySelect';

export const CartListItem = ({ product, setTotalPrice }) => {
  const stylesShema = styles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { id, image, price, quantity, title } = product;
  const userCartList = useSelector(selectCartList);
  const [isInCart, setIsInCart] = useState(
    userCartList.some(item => item.id === id),
  );
  console.log(product)
  const [quantityCart, setQuantityCart] = useState(quantity.toString());
  const [totalPriceProduct, setTotalPriceProduct] = useState(price.toFixed(2));

  const handleClick = idProduct => {
    navigation.navigate('ProductDetails', {
      id: idProduct,
      goFrom: 'CartListItem',
    });
  };

  const handleDeleteFromWishList = () => {
    setProductsWishList(product, userCartList, dispatch, updateWishList);
  };

  const handleQuantityIncreaseCart = () => {
    setQuantityCart(prevQuantity => {
      const newQuantity = Number(prevQuantity) + 1;

      setTotalPriceProduct((price * newQuantity).toFixed(2));
      setTotalPrice(prevTotalPrice => prevTotalPrice + price);

      return newQuantity.toString();
    });
  };

  const handleQuantityDecreaseCart = () => {
    if (quantity > 1) {
      setQuantityCart(prevQuantity => {
        const newQuantity = Number(prevQuantity) - 1;

        setTotalPriceProduct((price * newQuantity).toFixed(2));
        setTotalPrice(prevTotalPrice => prevTotalPrice - price);

        return newQuantity.toString();
      });
    }
  };

  return (
    <>
      {product && (
        <TouchableOpacity
          style={stylesShema.container}
          onPress={() => handleClick(id)}
        >
          <View style={stylesShema.imageContainer}>
            <Image style={stylesShema.image} source={{ uri: image }} />
          </View>

          <View style={stylesShema.header}>
            <View style={stylesShema.contentHeader}>
              <View style={stylesShema.content}>
                <View style={stylesShema.titleContainer}>
                  <Text style={stylesShema.title}>{title}</Text>
                </View>

                <View style={stylesShema.priceContainer}>
                  <Text style={stylesShema.price}>&#36; {price}</Text>
                </View>
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
              <View style={stylesShema.quantity}>
                <QuantitySelect
                  quantity={quantityCart}
                  setQuantity={setQuantityCart}
                  isCartSelect={true}
                  handleQuantityIncreaseCart={handleQuantityIncreaseCart}
                  handleQuantityDecreaseCart={handleQuantityDecreaseCart}
                  setTotalPriceProduct={setTotalPriceProduct}
                />
              </View>

              <View style={stylesShema.totalContainer}>
                <Text style={stylesShema.total}>
                  {t('totalPrice')} &#36; {totalPriceProduct}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
