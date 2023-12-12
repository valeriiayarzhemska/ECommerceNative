import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  useGetUsersQuery,
  useLoginMutation,
} from '../../store/redux/services/user/userApi';
import { setUserData } from '../../store/redux/features/auth/authActions';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Logo } from '../../assets/icons';

import { styles } from './style';
import {
  selectError,
  selectToken,
} from '../../store/redux/features/auth/authSelectors';

export const Login = () => {
  const stylesShema = styles();

  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const loginError = useSelector(selectError);
  const [login, { isLoading }] = useLoginMutation();
  const { data: users, error: usersError } = useGetUsersQuery();
  const dispatch = useDispatch();
  const userToken = useSelector(selectToken);

  const handleSubmit = async ({ username, password }) => {
    setError(null);

    try {
      const userAuth = await login({
        username,
        password,
      });

      if (loginError) {
        setError('errorWentWrong');
      }

      await dispatch(setUserData({ nickname: 'username', users, usersError }));

      if (
        Object.hasOwn(userAuth, 'error') &&
        userAuth.error.data == 'username or password is incorrect'
      ) {
        setError('wrongCredential');

        return;
      }

      console.log(userToken);
    } catch (error) {
      setError('errorWentWrong');
    }
  };

  const handleSignUpClick = () => {
    navigation.navigate('Registration');
  };

  return (
    <BackgroundWrapper>
      <View style={stylesShema.container}>
        <View style={stylesShema.logo}>
          <Logo width={90} height={86} />
        </View>

        <View style={stylesShema.titleWrapper}>
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
        />
      </View>
    </BackgroundWrapper>
  );
};
