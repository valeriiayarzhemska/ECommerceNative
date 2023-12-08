import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {
  useGetUsersQuery,
  useLoginMutation,
} from '../../store/redux/services/user/userApi';
import { setUserData } from '../../store/redux/features/authActions';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Logo } from '../../assets/icons';

import { styles } from './style';

export const Catalog = () => {
  const stylesShema = styles();

  /* const [error, setError] = useState(null);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [login, { isLoading }] = useLoginMutation();
  const { data: users, error: usersError } = useGetUsersQuery();
  const dispatch = useDispatch();

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
      setError('errorLogin');
      console.log(error);
    }
  };

  const handleSignUpClick = () => {
    navigation.navigate('Registration');
  }; */

  return (
    <BackgroundWrapper>
      <View style={stylesShema.container}>
        <View style={stylesShema.logo}>
          <Logo width={90} height={86} />
        </View>

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
        </View>

        <ButtonTemplate
          text={t('registrationButtonText')}
          handleClick={handleSignUpClick}
          isOutline={true}
        /> */}
      </View>
    </BackgroundWrapper>
  );
};
