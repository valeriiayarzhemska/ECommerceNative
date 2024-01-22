import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import * as Yup from 'yup';
import { Country, State, City } from 'country-state-city';
import {
  getCountry,
  getUpdatedCitiesByState,
  getUpdatedStates,
  getUpdatedCitiesByCountry,
} from '../../store/geoData';

import { FormTemplate } from '../FormTemplate';

import { styles } from './style';

export const FormAddress = ({
  initialValues,
  validationSchema,
  handleSubmitForm,
  mock,
  buttonText,
  isLoadingData,
}) => {
  const stylesShema = styles();

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isStateEnabled, setIsStateEnabled] = useState(false);
  const [isCityEnabled, setIsCityEnabled] = useState(false);

  const statesDropdownRef = useRef(null);
  const citiesDropdownRef = useRef(null);

  const additionalValidationSchema = Yup.object().shape({
    state: isStateEnabled
      ? Yup.string().required('inputStateRequired')
      : Yup.string(),
    city: isCityEnabled
      ? Yup.string().required('inputCityRequired')
      : Yup.string(),
  });

  const getValidationSchema = () => {
    const schema = validationSchema.concat(additionalValidationSchema);

    return schema;
  };

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

  const handleCountrySelect = (countryData, setFieldValue) => {
    statesDropdownRef.current.reset();
    citiesDropdownRef.current.reset();
    setIsStateEnabled(false);

    setSelectedCountry(countryData);
    setSelectedState(null);
    setSelectedCity(null);
    setFieldValue('country', countryData ? countryData.name : '', true);
  };

  const handleStateSelect = (stateData, setFieldValue) => {
    citiesDropdownRef.current.reset();
    setIsCityEnabled(false);

    setSelectedState(stateData);
    setSelectedCity(null);
    setFieldValue('state', stateData ? stateData.name : '', true);
  };

  const handleCitySelect = (cityData, setFieldValue) => {
    setSelectedCity(cityData);
    setFieldValue('city', cityData ? cityData.name : '', true);
  };

  const updatedMockName = mock.map(item => {
    switch (item.name) {
      case 'country':
        return {
          ...item,
          data: countriesData,
          handleSelect: handleCountrySelect,
        };

      case 'state':
        return {
          ...item,
          data: statesData,
          ref: statesDropdownRef,

          handleSelect: handleStateSelect,
        };

      case 'city':
        return {
          ...item,
          data: citiesData,
          ref: citiesDropdownRef,
          handleSelect: handleCitySelect,
        };

      default:
        return item;
    }
  });

  useEffect(() => {
    if (statesData.length > 0 && !selectedState) {
      setIsStateEnabled(true);
    }

    if (citiesData.length > 0 && !selectedCity) {
      setIsCityEnabled(true);
    }
  }, [statesData, citiesData]);

  return (
    <View style={stylesShema.form}>
      <FormTemplate
        initialValues={initialValues}
        validationSchema={getValidationSchema()}
        handleSubmitForm={handleSubmitForm}
        inputList={updatedMockName}
        buttonText={buttonText}
        isLoadingData={isLoadingData}
        statesDropdownRef={statesDropdownRef}
        citiesDropdownRef={citiesDropdownRef}
      />
    </View>
  );
};
