import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/redux/features/auth/authSlice';
import * as Yup from 'yup';
import { useGetProductsQuery } from '../../store/redux/services/products/productsApi';
import { setUserData } from '../../store/redux/features/auth/authActions';
import {
  selectCartList,
  selectCartListError,
  selectCartListLoading,
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
import { useGetUserCartQuery } from '../../store/redux/services/user/userApi';
import { setCartData } from '../../store/redux/features/products/productsActions';
import { handleUserIconClick } from '../../utils';

export const Cart = () => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    data,
    isLoading: isDataLoading,
    isFetching: isDataFetching,
    error,
    refetch,
  } = useGetUserCartQuery({
    refetchOnMountOrArgChange: true,
  });

  const userCartList = useSelector(selectCartList);
  const isUserCartListLoading = useSelector(selectCartListLoading);
  const isUserCartListError = useSelector(selectCartListError);

  useEffect(() => {
    const loadCart = async () => {
      if (data) {
        await dispatch(setCartData(data));
      };
    };

    loadCart();
  }, []);


  return (
    <SafeAreaView style={stylesShema.container}>
      {userCartList && !isUserCartListLoading && (
        <FlatList
          contentContainerStyle={stylesShema.listContent}
          numColumns={1}
          key={1}
          data={userCartList}
          renderItem={({ item }) => <ListItem product={item} />}
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
              <SkeletonList isLoading={isUserCartListLoading} />
            ) : (
              <ErrorComponentMessage message={'emptyCartList'} />
            )
          }
          initialNumToRender={8}
        />
      )}
    </SafeAreaView>
  );
};
