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

import { capitalizedValue, handleBackClick } from '../../utils';
import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/edit-profile-mock';

import { styles } from './style';
import { FormTemplateAddress } from '../../components/FormTemplateAddress';

export const SettingsSystem = ({ route }) => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const { params } = route;
  const { goFrom } = params;

  const [isLoadingData, setIsLoadingData] = useState(false);
  const user = useSelector(selectUser);
  const { address } = user;
  const { street, zipcode } = address;
  const streetName = capitalizedValue(street);

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
            title={t('editDeliveryAddress')}
          />
        </View>

        <View style={stylesShema.form}>
          <FormTemplateAddress
            initialValues={{
              country: '',
              state: '',
              city: '',
              street: streetName,
              zipcode: zipcode,
            }}
            validationSchema={Yup.object({
              country: validationSchema?.country,
              state: validationSchema?.state,
              city: validationSchema?.city,
              street: validationSchema?.street,
            })}
            handleSubmitForm={handleSubmit}
            buttonText={t('saveText')}
            isDelivery={true}
            isLoadingData={isLoadingData}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
