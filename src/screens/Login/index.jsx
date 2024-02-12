import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import {
  useGetUsersQuery,
  useLoginMutation,
} from '../../store/redux/services/user/userApi';
import { setUserData } from '../../store/redux/features/auth/authActions';
import { selectError } from '../../store/redux/features/auth/authSelectors';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Logo } from '../../assets/icons';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { styles } from './style';
import { setToNullAfterDelay } from '../../utils';

export const Login = () => {
  const stylesShema = styles();
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [error, setError] = useState(null);
  const loginError = useSelector(selectError);
  const [login, { isLoading }] = useLoginMutation();
  const { data: users, error: usersError } = useGetUsersQuery();
  const dispatch = useDispatch();

  const isFocused = useIsFocused();
  const [refreshKey, setRefreshKey] = useState(0);

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

      await dispatch(setUserData({ nickname: username, users, usersError }));

      if (
        Object.hasOwn(userAuth, 'error') &&
        userAuth.error.data == 'username or password is incorrect'
      ) {
        setError('wrongCredential');

        setToNullAfterDelay(setError);

        return;
      }
    } catch (error) {
      setError('errorWentWrong');

      setToNullAfterDelay(setError);
    }
  };

  const handleSignUpClick = () => {
    navigation.navigate('Registration');
  };

  useEffect(() => {
    if (!isFocused) {
      setRefreshKey(prevKey => prevKey + 1);
    }
  }, [isFocused]);

  return (
    <BackgroundWrapper>
      <View style={stylesShema.container} key={refreshKey}>
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
