import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartList,
  selectCartListError,
  selectCartListLoading,
  selectProducts,
} from '../../store/redux/features/products/productsSelectors';
import { selectUserId } from '../../store/redux/features/auth/authSelectors';
import { useGetUserCartQuery } from '../../store/redux/services/products/productsApi';
import { setCartData } from '../../store/redux/features/products/productsActions';

import { ButtonTemplate } from '../../components/ButtonTemplate';
import { Logo } from '../../assets/icons';
import { CustomHeader } from '../../components/CustomHeader';
import { ErrorComponentMessage } from '../../components/ErrorComponentMessage';
import { CartListItem } from '../../components/CartListItem';
import { SkeletonCartlist } from '../../components/Skeletons/SkeletonCartlist';

import { setProductsCartList } from '../../utils';

import { styles } from './style';

export const Cart = () => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const userId = useSelector(selectUserId);
  const {
    data,
    isLoading: isDataLoading,
    isFetching: isDataFetching,
    error,
    refetch,
  } = useGetUserCartQuery(userId, {});

  const products = useSelector(selectProducts);
  const cart = useSelector(selectCartList);
  const isUserCartListLoading = useSelector(selectCartListLoading);
  const isUserCartListError = useSelector(selectCartListError);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = cartList => {
    const newTotalPrice = cartList.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    setTotalPrice(newTotalPrice);
  };

  const handleCheckOut = () => {
    navigation.navigate('Checkout', {
      totalPrice: totalPrice,
      goFrom: 'Cart',
    });
  };

  useEffect(() => {
    const loadCart = async () => {
      if (data) {
        const cartList = await setProductsCartList(
          data,
          products,
          dispatch,
          setCartData,
        );

        updateTotalPrice(cartList);
      }
    };

    loadCart();
  }, [data]);

  useEffect(() => {
    if (cart.length === 0) {
      setTotalPrice(0);
    }
  }, [cart]);

  return (
    <SafeAreaView style={stylesShema.container}>
      <FlatList
        contentContainerStyle={stylesShema.listContent}
        numColumns={1}
        key={1}
        data={cart}
        renderItem={({ item }) => (
          <CartListItem
            product={item}
            setTotalPrice={setTotalPrice}
            updateTotalPrice={updateTotalPrice}
          />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <CustomHeader
            isButtonLeft={true}
            buttonLeft={<Logo width={44} height={44} />}
            title={t('titleCartList')}
            isTitled={true}
          />
        }
        ListEmptyComponent={
          isUserCartListError ? (
            <ErrorComponentMessage message={'errorWentWrong'} />
          ) : isUserCartListLoading ? (
            <SkeletonCartlist isLoading={true} />
          ) : (
            <View style={stylesShema.emptyList}>
              <ErrorComponentMessage message={'emptyCartList'} />
            </View>
          )
        }
        initialNumToRender={8}
      />

      <View style={stylesShema.footer}>
        <Text style={stylesShema.totalPriceText}>
          {t('totalPrice')} &#36; {totalPrice.toFixed(2)}
        </Text>

        <View style={stylesShema.buttonContainer}>
          <ButtonTemplate
            text={t('checkOut')}
            handleClick={handleCheckOut}
            isDisabled={Number(totalPrice) < 1}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
