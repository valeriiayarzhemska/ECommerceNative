import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SelectDropdown from 'react-native-select-dropdown';
import { Country, State, City } from 'country-state-city';
import {
  getCountry,
  getUpdatedCitiesByState,
  getUpdatedStates,
  getUpdatedCitiesByCountry,
} from '../../store/geoData';

import { InputTemplate } from '../InputTemplate';
import { ButtonTemplate } from '../ButtonTemplate';

import { styles } from './style';
import { DownArrow, UpArrow } from '../../assets/icons';
import { mockAddress, mockName } from '../../store/mocks/delivery-mock';
import { colors } from '../../constants';

export const FormTemplateAddress = ({
  initialValues,
  validationSchema,
  handleSubmitForm,
  buttonText,
  isLoadingData,
}) => {
  const stylesShema = styles();
  const { t } = useTranslation();

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isStateEnabled, setIsStateEnabled] = useState(false);
  const [isCityStateEnabled, setIsCityStateEnabled] = useState(false);

  const statesDropdownRef = useRef();
  const citiesDropdownRef = useRef();

  const additionalValidationSchema = Yup.object().shape({
    state: isStateEnabled
      ? Yup.string().required('inputStateRequired')
      : Yup.string(),
    city: isCityStateEnabled
      ? Yup.string().required('inputCityRequired')
      : Yup.string(),
  });

  const getValidationSchema = () => {
    const schema = validationSchema.concat(additionalValidationSchema);

    return schema;
  };

  const addressFromik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmitForm,
    validationSchema: getValidationSchema(),
  });

  const countriesData = getCountry(Country);
  const statesData = selectedCountry
    ? getUpdatedStates(State, selectedCountry.isoCode)
    : [];
  const citiesData = selectedState
    ? getUpdatedCitiesByState(
        City,
        selectedCountry.isoCode,
        selectedState.isoCode,
      )
    : selectedCountry && statesData.length < 1
    ? getUpdatedCitiesByCountry(City, selectedCountry.isoCode)
    : [];

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    setFieldError,
  } = addressFromik;

  const handleCountrySelect = countryData => {
    statesDropdownRef.current.reset();
    citiesDropdownRef.current.reset();
    setIsStateEnabled(false);

    setSelectedCountry(countryData);
    setSelectedState(null);
    setSelectedCity(null);
    setFieldValue('country', countryData ? countryData.name : '', true);
    addressFromik.setFieldError('country', undefined);
    console.log(statesData);
  };

  const handleStateSelect = stateData => {
    citiesDropdownRef.current.reset();

    setSelectedState(stateData);
    setSelectedCity(null);
    setFieldValue('state', stateData ? stateData.name : '', true);
  };

  const handleCitySelect = cityData => {
    setSelectedCity(cityData);
    setFieldValue('city', cityData ? cityData.name : '', true);
  };
  console.log(errors);

  useEffect(() => {
    if (statesData.length > 0 && !selectedState) {
      setIsStateEnabled(true);
    }
  }, [statesData, citiesData]);

  return (
    <View style={stylesShema.container}>
      <View style={stylesShema.input}>
        {mockName.map(field => {
          return (
            <InputTemplate
              key={field.id}
              icon={field.icon}
              placeholder={field.placeholder}
              secureTextEntry={field.secureTextEntry}
              value={values[field.name]}
              onChangeText={handleChange(field.name)}
              error={touched[field.name] && errors[field.name]}
              errors={errors[field.name]}
              keyboardType={field.keyboardType}
              name={field.name}
            />
          );
        })}
      </View>

      <View style={stylesShema.selectsContainer}>
        <SelectDropdown
          data={countriesData}
          onSelect={(selectedItem, index) => {
            handleCountrySelect(selectedItem);
          }}
          defaultButtonText={t('selectCountry')}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
          buttonStyle={stylesShema.dropdownButton}
          buttonTextStyle={stylesShema.dropdownButtonText}
          renderDropdownIcon={isOpened => {
            return isOpened ? (
              <UpArrow color={colors.lightGray} />
            ) : (
              <DownArrow color={colors.lightGray} />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={stylesShema.dropdown}
          rowStyle={stylesShema.dropdownRow}
          rowTextStyle={stylesShema.dropdownRowText}
          selectedRowTextStyle={stylesShema.dropdownSelectedText}
          dropdownOverlayColor={'none'}
        />

        {errors['country'] && (
          <View style={stylesShema.errorWrapperCountry}>
            <Text style={stylesShema.errorText}>{t(errors['country'])}</Text>
          </View>
        )}

        <SelectDropdown
          data={statesData}
          ref={statesDropdownRef}
          onSelect={(selectedItem, index) => {
            handleStateSelect(selectedItem);
          }}
          defaultButtonText={t('selectState')}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
          buttonStyle={[
            stylesShema.dropdownButton,
            statesData.length < 1 ? stylesShema.dropdownButtonDisabled : null,
          ]}
          buttonTextStyle={[
            stylesShema.dropdownButtonText,
            statesData.length < 1
              ? stylesShema.dropdownButtonTextDisabled
              : null,
          ]}
          renderDropdownIcon={isOpened => {
            return isOpened ? (
              <UpArrow color={colors.lightGray} />
            ) : (
              <DownArrow color={colors.lightGray} />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={stylesShema.dropdown}
          rowStyle={stylesShema.dropdownRow}
          rowTextStyle={stylesShema.dropdownRowText}
          selectedRowTextStyle={stylesShema.dropdownSelectedText}
          disabled={statesData.length < 1}
          dropdownOverlayColor={'none'}
        />

        {errors['state'] && (
          <View style={stylesShema.errorWrapperState}>
            <Text style={stylesShema.errorText}>{t(errors['state'])}</Text>
          </View>
        )}

        <SelectDropdown
          data={citiesData}
          ref={citiesDropdownRef}
          onSelect={(selectedItem, index) => {
            handleCitySelect(selectedItem);
          }}
          defaultButtonText={t('selectCity')}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
          buttonStyle={[
            stylesShema.dropdownButton,
            citiesData.length < 1 ? stylesShema.dropdownButtonDisabled : null,
          ]}
          buttonTextStyle={[
            stylesShema.dropdownButtonText,
            citiesData.length < 1
              ? stylesShema.dropdownButtonTextDisabled
              : null,
          ]}
          renderDropdownIcon={isOpened => {
            return isOpened ? (
              <UpArrow color={colors.lightGray} />
            ) : (
              <DownArrow color={colors.lightGray} />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={stylesShema.dropdown}
          rowStyle={stylesShema.dropdownRow}
          rowTextStyle={stylesShema.dropdownRowText}
          selectedRowTextStyle={stylesShema.dropdownSelectedText}
          disabled={citiesData.length < 1}
          dropdownOverlayColor={'none'}
        />

        {errors['city'] && (
          <View style={stylesShema.errorWrapperCity}>
            <Text style={stylesShema.errorText}>{t(errors['city'])}</Text>
          </View>
        )}
      </View>

      <View style={stylesShema.input}>
        {mockAddress.map(field => {
          return (
            <InputTemplate
              key={field.id}
              icon={field.icon}
              placeholder={field.placeholder}
              secureTextEntry={field.secureTextEntry}
              value={values[field.name]}
              onChangeText={handleChange(field.name)}
              error={touched[field.name] && errors[field.name]}
              errors={errors[field.name]}
              keyboardType={field.keyboardType}
              name={field.name}
            />
          );
        })}
      </View>

      <View style={stylesShema.button}>
        <ButtonTemplate text={buttonText} handleClick={handleSubmit} />
      </View>
    </View>
  );
};
