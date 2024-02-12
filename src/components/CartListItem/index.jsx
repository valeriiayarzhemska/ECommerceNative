import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartList } from '../../store/redux/features/products/productsSelectors';
import { updateCartData } from '../../store/redux/features/products/productsActions';
import { setCartList } from '../../store/redux/features/products/productsSlice';

import { ButtonTemplate } from '../ButtonTemplate';
import { QuantitySelect } from '../QuantitySelect';
import { CrossIcon } from '../../assets/icons';

import {
  deleteProductInCartList,
  updateProductCartQuantity,
} from '../../utils';

import { styles } from './style';

export const CartListItem = ({ product, setTotalPrice, updateTotalPrice }) => {
  const stylesShema = styles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { id, image, price, quantity, title } = product;
  const userCartList = useSelector(selectCartList);
  const [quantityCart, setQuantityCart] = useState('1');
  const [totalPriceProduct, setTotalPriceProduct] = useState(
    (price * quantity).toFixed(2),
  );

  const handleClick = idProduct => {
    navigation.navigate('ProductDetails', {
      id: idProduct,
      goFrom: 'Cart',
    });
  };

  const handleDeleteFromCartList = () => {
    deleteProductInCartList(product, userCartList, dispatch, updateCartData);
    setTotalPrice(prevTotalPrice => prevTotalPrice - totalPriceProduct);
  };

  const handleQuantityIncreaseCart = async () => {
    setQuantityCart(prevQuantity => (Number(prevQuantity) + 1).toString());

    setTotalPriceProduct(prevPrice => (Number(prevPrice) + price).toFixed(2));
    setTotalPrice(prevTotalPrice => prevTotalPrice + price);

    await updateProductCartQuantity(
      product,
      Number(quantityCart) + 1,
      userCartList,
      dispatch,
      setCartList,
    );
  };

  const handleQuantityDecreaseCart = async () => {
    setQuantityCart(prevQuantity =>
      Number(prevQuantity) !== 1 ? (Number(prevQuantity) - 1).toString() : '1',
    );

    if (Number(quantityCart) > 1) {
      setTotalPriceProduct(prevPrice => (Number(prevPrice) - price).toFixed(2));
      setTotalPrice(prevTotalPrice => prevTotalPrice - price);

      await updateProductCartQuantity(
        product,
        Number(quantityCart) - 1,
        userCartList,
        dispatch,
        setCartList,
      );
    }
  };

  useEffect(() => {
    setQuantityCart(quantity ? quantity.toString() : '1');
    setTotalPriceProduct((price * quantity).toFixed(2));
    updateTotalPrice(userCartList);
  }, [quantity]);

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
                  handleClick={handleDeleteFromCartList}
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
