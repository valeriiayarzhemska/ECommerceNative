import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';

import { BackArrow, Logo } from '../../assets/icons';

import { styles } from './style';

export const Registration = () => {
  const stylesShema = styles();

  const [error, setError] = useState(null);

  const navigation = useNavigation();
  //const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = async values => {
    /* const res = await dispatch(loginUser(values));

    res && setError(res); */
  };

  const handleSignUpClick = () => {
    navigation.navigate('Registration');
  };

  return (
    <BackgroundWrapper>
      <TouchableOpacity style={stylesShema.backButton}>
        <BackArrow />
      </TouchableOpacity>

      <View style={stylesShema.container}>
        <View style={stylesShema.logo}>
          <Logo width={90} height={86} />
        </View>

        <View style={stylesShema.titleWrapper}>
          <Text style={stylesShema.title}>{t('registrationTitle')}</Text>
        </View>

        <View style={stylesShema.form}>
          <FormTemplate
            initialValues={{
              username: '',
              email: '',
              newPassword: '',
              repeatPassword: '',
            }}
            validationSchema={Yup.object({
              username: validationSchema?.username,
              newPassword: validationSchema?.newPassword,
              email: validationSchema?.email,
              repeatPassword: validationSchema?.repeatPassword,
            })}
            handleSubmitForm={handleSubmit}
            inputList={mock}
            buttonText={t('loginButtonText')}
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
