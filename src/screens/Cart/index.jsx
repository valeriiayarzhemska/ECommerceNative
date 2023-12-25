import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/redux/features/auth/authSlice';
import * as Yup from 'yup';
import { useGetProductsQuery } from '../../store/redux/services/products/productsApi';
import { setUserData } from '../../store/redux/features/auth/authActions';
import {
  selectCartList,
  selectCartListError,
  selectCartListLoading,
  selectProducts,
} from '../../store/redux/features/products/productsSelectors';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Logo, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { colors } from '../../constants';
import { ProductsList } from '../../components/ProductsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductsItem } from '../../components/ProductsItem';
import { CatalogHeader } from '../../components/CatalogHeader';
import { Loader } from '../../components/Loader';
import { useGetUserCartQuery } from '../../store/redux/services/products/productsApi';
import { setCartData } from '../../store/redux/features/products/productsActions';
import { handleUserIconClick, setProductsCartList } from '../../utils';
import { CustomHeader } from '../../components/CustomHeader';
import { ErrorComponentMessage } from '../../components/ErrorComponentMessage';
import {
  selectUser,
  selectUserId,
} from '../../store/redux/features/auth/authSelectors';
import { WishListItem } from '../../components/WishListItem';
import { CartListItem } from '../../components/CartListItem';
import { SkeletonCartlist } from '../../components/Skeletons/SkeletonCartlist';

export const Cart = () => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userId = useSelector(selectUserId);
console.log(userId)
  const {
    data,
    isLoading: isDataLoading,
    isFetching: isDataFetching,
    error,
    refetch,
  } = useGetUserCartQuery(userId, {});

  const products = useSelector(selectProducts);
  const isUserCartListLoading = useSelector(selectCartListLoading);
  const isUserCartListError = useSelector(selectCartListError);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = cartList => {
    const newTotalPrice = cartList.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    setTotalPrice(newTotalPrice);
  };

  const handleCheckOut = () => {};

  useEffect(() => {

    const loadCart = async () => {
      if (data) {
        const cartList = await setProductsCartList(
          data,
          products,
          dispatch,
          setCartData,
        );
        console.log(cartList)

        setCartProducts(cartList);
        updateTotalPrice(cartList);
      }
    };

    loadCart();
  }, [data]);

  return (
    <SafeAreaView style={stylesShema.container}>
      {cartProducts && cartProducts.length > 0 && !isUserCartListLoading && (
        <View style={stylesShema.containerList}>
          <FlatList
            contentContainerStyle={stylesShema.listContent}
            numColumns={1}
            key={1}
            data={cartProducts}
            renderItem={({ item }) => (
              <CartListItem product={item} setTotalPrice={setTotalPrice} />
            )}
            keyExtractor={item => item.id}
            ListHeaderComponent={
              <CustomHeader
                isButtonLeft={true}
                buttonLeft={<Logo width={44} height={44} />}
                isButtonRight={true}
                title={t('titleCartList')}
                isTitled={true}
                buttonRight={
                  <ButtonTemplate
                    icon={UserIcon}
                    iconWidth={30}
                    iconHeight={30}
                    handleClick={handleUserIconClick}
                    isRounded={true}
                  />
                }
              />
            }
            ListEmptyComponent={
              isUserCartListError ? (
                <ErrorComponentMessage message={'errorWentWrong'} />
              ) : isUserCartListLoading ? (
                <SkeletonCartlist isLoading={isUserCartListLoading} />
              ) : (
                <ErrorComponentMessage message={'emptyCartList'} />
              )
            }
            initialNumToRender={8}
          />
        </View>
      )}

      <View style={stylesShema.footer}>
        <Text style={stylesShema.totalPriceText}>
          {t('totalPrice')} &#36; {totalPrice.toFixed(2)}
        </Text>

        <View style={stylesShema.buttonContainer}>
          <ButtonTemplate text={t('checkOut')} handleClick={handleCheckOut} />
        </View>
      </View>
    </SafeAreaView>
  );
};
