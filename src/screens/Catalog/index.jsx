import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/redux/features/authSlice';
import * as Yup from 'yup';
import { useGetProductsQuery } from '../../store/redux/services/products/productsApi';
import { setUserData } from '../../store/redux/features/authActions';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Logo, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { colors } from '../../constants';

export const Catalog = () => {
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

  const handleLogOut = () => {
    dispatch(logout());
  };

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
    <BackgroundWrapper>
      <View style={stylesShema.container}>
        <View style={stylesShema.header}>
          <View style={stylesShema.logo}>
            <Logo width={40} height={40} />
          </View>

          <View style={stylesShema.profileIcon}>
            <ButtonTemplate
              icon={UserIcon}
              iconWidth={30}
              handleClick={handleLogOut}
              isRounded={true}
            />
          </View>
        </View>

        <View>
          <Text>Search Bar</Text>
        </View>

        <View>
          <Text>Product slider</Text>
        </View>

        <View>
          <Text>Product categories slider</Text>
        </View>

        {isFetching ||
          (isLoading && (
            <View style={stylesShema.productsContainer}>
              <Text>Products are loading</Text>
            </View>
          ))}

        {productsError && (
          <View style={stylesShema.productsContainer}>
            <Text>{t('errorWentWrong')}</Text>
          </View>
        )}

        {products && !isFetching && !isLoading && (
          <View style={stylesShema.productsContainer}>
            {products.map(product => (
              <Text>{product.category}</Text>
            ))}
          </View>
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
      </View>
    </BackgroundWrapper>
  );
};
