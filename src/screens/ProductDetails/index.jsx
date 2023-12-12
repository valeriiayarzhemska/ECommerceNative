import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
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
import { Logo, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { colors } from '../../constants';
import { ProductsList } from '../../components/ProductsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductsItem } from '../../components/ProductsItem';
import { CatalogHeader } from '../../components/CatalogHeader';
import { Loader } from '../../components/Loader';

export const ProductDetail = () => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    data: products,
    isLoading,
    isFetching,
    error: productsError,
  } = useGetProductsQuery({
    refetchOnMountOrArgChange: true,
  });

  console.log(products);

  useEffect(() => {
    const loadProducts = async () => {};
  }, []);

  /* const [error, setError] = useState(null);
  const navigation = useNavigation();

  const handleSubmit = async ({ username, password }) => {
    setError(null);

    try {
      const userAuth = await login({
        username: username,
        password: password,
      });

      await dispatch(setUserData({ nickname: username, users, usersError }));

      if (
        Object.hasOwn(userAuth, 'error') &&
        userAuth.error.data == 'username or password is incorrect'
      ) {
        setError('wrongCredential');

        return;
      }
    } catch (error) {
      setError('errorWentWrong');
      console.log(error);
    }
  };

  const handleSignUpClick = () => {
    navigation.navigate('Registration');
  }; */

  return (
    <SafeAreaView style={stylesShema.container}>
      {/* {isFetching ||
          (isLoading && (
            <View style={stylesShema.productsContainer}>
              <Text>Products are loading</Text>
            </View>
          ))} */}

      {productsError && (
        <View style={stylesShema.productsContainer}>
          <Text>{t('errorWentWrong')}</Text>
        </View>
      )}

      {products && !isFetching && !isLoading && (
        <FlatList
          columnWrapperStyle={stylesShema.list}
          contentContainerStyle={stylesShema.listContent}
          numColumns={2}
          key={2}
          data={products}
          renderItem={({ item }) => <ProductsItem product={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={<CatalogHeader />}
          ListEmptyComponent={<Loader loading={isLoading || isFetching} />}
          initialNumToRender={10}
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
