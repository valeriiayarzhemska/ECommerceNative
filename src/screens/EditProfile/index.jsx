import React, { useCallback, useState } from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import * as Yup from 'yup';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../store/redux/features/auth/authActions';
import { selectUser } from '../../store/redux/features/auth/authSelectors';

import { FormTemplate } from '../../components/FormTemplate';
import { CustomHeader } from '../../components/CustomHeader';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/edit-profile-mock';
import { capitalizedValue, handleBackClick } from '../../utils';

import { styles } from './style';

export const EditProfile = ({ route }) => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const { params } = route;
  const { goFrom } = params;

  const [isLoadingData, setIsLoadingData] = useState(false);
  const user = useSelector(selectUser);
  const { name, email, phone } = user;
  const userFirstName = capitalizedValue(name.firstname);
  const userLastName = capitalizedValue(name.lastname);

  const handleSubmit = async ({
    firstName,
    lastName,
    email,
    phone,
    newPassword,
  }) => {
    setIsLoadingData(true);

    try {
      await dispatch(
        setUserInfo({
          name: {
            firstname: firstName,
            lastname: lastName,
          },
          email,
          phone,
          password: newPassword,
        }),
      );

      setIsLoadingData(false);
      navigation.goBack();
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useFocusEffect(handleBackClick(goFrom, navigation, useCallback));

  return (
    <SafeAreaView style={stylesShema.container}>
      <ScrollView style={stylesShema.containerScroll}>
        <View style={stylesShema.header}>
          <CustomHeader
            isButtonBack={true}
            isTitled={true}
            title={t('editProfile')}
          />
        </View>

        <View style={stylesShema.form}>
          <FormTemplate
            initialValues={{
              firstName: userFirstName,
              lastName: userLastName,
              email: email,
              phone: phone,
              newPassword: '',
              repeatPassword: '',
            }}
            validationSchema={Yup.object({
              firstName: validationSchema?.firstName,
              lastName: validationSchema?.lastName,
              email: validationSchema?.email,
              phone: validationSchema?.phone,
              newPassword: validationSchema?.newPassword,
              repeatPassword: validationSchema?.repeatPassword,
            })}
            handleSubmitForm={handleSubmit}
            inputList={mock}
            buttonText={t('saveText')}
            isLoadingData={isLoadingData}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
