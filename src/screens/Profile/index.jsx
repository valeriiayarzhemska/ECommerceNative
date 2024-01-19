import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View, ScrollView } from 'react-native';
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
import {
  capitalizedValue,
  refresh,
  shouldItemUpdate,
  sortProducts,
} from '../../utils';
import { SearchBar } from '../../components/SearchBar';
import { CustomHeader } from '../../components/CustomHeader';
import { SkeletonCatalog } from '../../components/Skeletons/SkeletonCatalog';
import { SkeletonWishlist } from '../../components/Skeletons/SkeletonWishlist';
import { SkeletonCatalogItem } from '../../components/Skeletons/SkeletonCatalogItem';
import { ErrorComponentMessage } from '../../components/ErrorComponentMessage';
import { selectUser } from '../../store/redux/features/auth/authSelectors';
import { SettingsItem } from '../../components/SettingsItem';
import {
  settingsGeneral,
  settingsRed,
  settingsSystem,
} from './settingsOptions';

export const Profile = () => {
  const stylesShema = styles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);

  const { name, email, password, phone, address, zipcode } = user;

  const userName = `${capitalizedValue(name.firstname)} ${capitalizedValue(
    name.lastname,
  )}`;

  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setIsLoading(user ? false : true);
  }, []);

  return (
    <SafeAreaView style={stylesShema.container}>
      <ScrollView style={stylesShema.containerScroll}>
        <View style={stylesShema.headerContainer}>
          <CustomHeader title={t('account')} isTitled={true} />
        </View>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <View style={stylesShema.contentContainer}>
              <View style={stylesShema.avatar}>
                <UserIcon width={60} height={60} color={colors.lightGray} />
              </View>

              <View style={stylesShema.nameContainer}>
                <Text style={stylesShema.name}>{userName}</Text>
              </View>

              <View style={stylesShema.emailContainer}>
                <Text style={stylesShema.email}>{email}</Text>
              </View>
            </View>

            <View style={stylesShema.settingsContainer}>
              <View style={stylesShema.settingsWrapper}>
                <View style={stylesShema.titleContainer}>
                  <Text style={stylesShema.title}>{t('settingsGeneral')}</Text>
                </View>

                <View style={stylesShema.settings}>
                  {settingsGeneral.map(item => (
                    <SettingsItem item={item} key={item.id} />
                  ))}
                </View>
              </View>

              <View style={stylesShema.settingsWrapper}>
                <View style={stylesShema.titleContainer}>
                  <Text style={stylesShema.title}>{t('settingsSystem')}</Text>
                </View>

                <View style={stylesShema.settings}>
                  {settingsSystem.map(item => (
                    <SettingsItem item={item} key={item.id} />
                  ))}
                </View>
              </View>

              <View style={stylesShema.settingsWrapper}>

                <View style={stylesShema.settings}>
                  {settingsRed.map(item => (
                    <SettingsItem item={item} key={item.id} />
                  ))}
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
