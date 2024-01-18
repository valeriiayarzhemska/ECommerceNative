import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/redux/features/auth/authSlice';
import * as Yup from 'yup';
import { useGetProductsQuery } from '../../store/redux/services/products/productsApi';
import { setUserData } from '../../store/redux/features/auth/authActions';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Logo, LogoutIcon, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { colors } from '../../constants';
import { ProductsList } from '../../components/ProductsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductsItem } from '../../components/ProductsItem';
import { CatalogHeader } from '../../components/CatalogHeader';
import { Loader } from '../../components/Loader';
import {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from '../../store/redux/features/products/productsSelectors';
import { setProductsData } from '../../store/redux/features/products/productsActions';
import { refresh, shouldItemUpdate, sortProducts } from '../../utils';
import { SearchBar } from '../../components/SearchBar';
import { CustomHeader } from '../../components/CustomHeader';
import { SkeletonCatalog } from '../../components/Skeletons/SkeletonCatalog';
import { SkeletonWishlist } from '../../components/Skeletons/SkeletonWishlist';
import { SkeletonCatalogItem } from '../../components/Skeletons/SkeletonCatalogItem';
import { ErrorComponentMessage } from '../../components/ErrorComponentMessage';

export const Profile = () => {
  const stylesShema = styles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={stylesShema.container}>
      <View style={stylesShema.headerContainer}>
        <CustomHeader
          title={t('account')}
          isTitled={true}
        />
      </View>
    </SafeAreaView>
  );
};
