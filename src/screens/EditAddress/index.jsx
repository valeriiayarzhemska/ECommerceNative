import React, { useCallback, useState } from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import * as Yup from 'yup';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../store/redux/features/auth/authActions';
import { selectUser } from '../../store/redux/features/auth/authSelectors';

import { CustomHeader } from '../../components/CustomHeader';
import { FormAddress } from '../../components/FormAddress';

import { validationSchema } from '../../store/validationSchema';
import { mockName } from '../../store/mocks/edit-address-mock';
import { capitalizedValue, handleBackClick } from '../../utils';

import { styles } from './style';

export const EditAddress = ({ route }) => {
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

  const handleSubmit = async ({ country, state, city, street, zipcode }) => {
    setIsLoadingData(true);

    try {
      await dispatch(
        setUserInfo({
          address: { country, state, city, street, zipcode },
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
          <FormAddress
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
            mock={mockName}
            buttonText={t('saveText')}
            isLoadingData={isLoadingData}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};