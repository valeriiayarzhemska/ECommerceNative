import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useGetUserQuery } from '../../store/redux/services/user/userApi';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/registration-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';

import { BackArrow } from '../../assets/icons';

import { styles } from './style';

export const Registration = () => {
  const stylesShema = styles();

  const [error, setError] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { data: user, error: userError, isLoading } = useGetUserQuery('1');

  const handleSubmit = async values => {
    setError(null);

    if (user && !userError) {
      setIsFormSubmitted(true);
    }

    if (userError) {
      setError('errorLogin');
    }
  };

  const handleSignInClick = () => {
    navigation.goBack();
  };

  const handleContinueClick = () => {
    navigation.navigate('Login');
  };

  return (
    <BackgroundWrapper>
      <ButtonTemplate
        handleClick={handleSignInClick}
        icon={BackArrow}
        isSided={true}
      />

      <View style={stylesShema.container}>
        {isFormSubmitted ? (
          <View style={stylesShema.dataContainer}>
            <View style={stylesShema.titleWrapper}>
              <Text style={stylesShema.title}>{t('userDataTitle')}</Text>
            </View>

            <View style={stylesShema.datatTextWrapper}>
              <Text style={stylesShema.datatText}>
                {`Username: ${user[0].username}`}
              </Text>
            </View>

            <View style={stylesShema.datatTextWrapper}>
              <Text style={stylesShema.datatText}>
                {`Password: ${user[0].password}`}
              </Text>
            </View>

            <View style={stylesShema.dataButton}>
              <ButtonTemplate
                text={t('buttonContinue')}
                handleClick={handleContinueClick}
              />
            </View>
          </View>
        ) : (
          <>
            <View style={stylesShema.titleWrapper}>
              <Text style={stylesShema.title}>{t('registrationTitle')}</Text>
            </View>

            <View style={stylesShema.form}>
              <FormTemplate
                initialValues={{
                  username: '',
                  email: '',
                  phone: '',
                  newPassword: '',
                  repeatPassword: '',
                }}
                validationSchema={Yup.object({
                  username: validationSchema?.username,
                  email: validationSchema?.email,
                  phone: validationSchema?.phone,
                  newPassword: validationSchema?.newPassword,
                  repeatPassword: validationSchema?.repeatPassword,
                })}
                handleSubmitForm={handleSubmit}
                inputList={mock}
                buttonText={t('registrationButtonText')}
                isLoadingData={isLoading}
              />

              {error !== null && (
                <View style={stylesShema.errorContainer}>
                  <ErrorMessage message={error} />
                </View>
              )}
            </View>
          </>
        )}
      </View>
    </BackgroundWrapper>
  );
};
