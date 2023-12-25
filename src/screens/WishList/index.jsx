import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/redux/features/auth/authSlice';
import * as Yup from 'yup';
import { setUserData } from '../../store/redux/features/auth/authActions';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';
import { ErrorComponentMessage } from '../../components/ErrorComponentMessage';
import { Logo, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { colors } from '../../constants';
import { ProductsList } from '../../components/ProductsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductsItem } from '../../components/ProductsItem';
import { CatalogHeader } from '../../components/CatalogHeader';
import { Loader } from '../../components/Loader';
import { CustomHeader } from '../../components/CustomHeader';
import { handleUserIconClick } from '../../utils';
import {
  selectWishList,
  selectWishListError,
  selectWishListLoading,
} from '../../store/redux/features/products/productsSelectors';
import { WishListItem } from '../../components/WishListItem';
import { SkeletonWishlist } from '../../components/Skeletons/SkeletonWishlist';

export const WishList = () => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userWishList = useSelector(selectWishList);
  const isUserWishListLoading = useSelector(selectWishListLoading);
  const isUserWishListError = useSelector(selectWishListError);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={stylesShema.container}>
      {userWishList && !isUserWishListLoading && (
        <FlatList
          contentContainerStyle={stylesShema.listContent}
          numColumns={1}
          key={1}
          data={userWishList}
          renderItem={({ item }) => <WishListItem product={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <CustomHeader
              isButtonLeft={true}
              buttonLeft={<Logo width={44} height={44} />}
              isButtonRight={true}
              title={t('titleWishList')}
              isTitled={true}
              buttonRight={
                <ButtonTemplate
                  icon={UserIcon}
                  iconWidth={30}
                  iconHeight={30}
                  handleClick={handleLogOut}
                  isRounded={true}
                />
              }
            />
          }
          ListEmptyComponent={
            isUserWishListError ? (
              <ErrorComponentMessage message={'errorWentWrong'} />
            ) : isUserWishListLoading ? (
              <SkeletonWishlist isLoading={isUserWishListLoading} />
            ) : (
              <ErrorComponentMessage message={'emptyWishList'} />
            )
          }
          initialNumToRender={8}
        />
      )}

      {/* <View style={stylesShema.titleWrapper}>
          <Text style={stylesShema.title}>{t('loginTitle')}</Text>
        </View>

        <View style={stylesShema.form}>
          <FormTemplate
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
              username: validationSchema?.username,
              password: validationSchema?.password,
            })}
            handleSubmitForm={handleSubmit}
            inputList={mock}
            buttonText={t('loginButtonText')}
            isLoadingData={isLoading}
          />

          {error !== null && (
            <View style={stylesShema.errorContainer}>
              <ErrorMessage message={error} />
            </View>
          )}
        </View> */}

      {/* <ButtonTemplate
          text={'logOut'}
          handleClick={handleLogOut}
          isOutline={true}
        /> */}
    </SafeAreaView>
  );
};
