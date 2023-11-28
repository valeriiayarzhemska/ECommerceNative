import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { Logo } from '../../assets/icons';

import { styles } from './style';

export const Login = () => {
  const stylesShema = styles();

  const [error, setError] = useState(null);

  const navigation = useNavigation();
  //const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <BackgroundWrapper>
      <View>
        <Logo />
      </View>

      <View>
        <Text>{t('loginTitle')}</Text>
      </View>

      <View style={stylesShema.form}>
        <FormTemplate
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: validationSchema?.email,
            password: validationSchema?.password,
          })}
          handleSubmitForm={handleSubmit}
          inputList={mock}
          buttonText={t('loginButtonText')}
        />
        {error !== null && (
          <View style={stylesShema.errorContainer}>
            <ErrorMsg message={error} />
          </View>
        )}
      </View>

      <View style={stylesShema.buttonLink}>
        <FormButtonLink
          text={t('loginBottomText')}
          linkText={t('registrationButtonText')}
          handleClick={handleLinkClick}
        />
      </View>
    </BackgroundWrapper>
  );
};
