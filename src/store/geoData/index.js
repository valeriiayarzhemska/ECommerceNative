export const getCountry = Country => {
  const countries = Country.getAllCountries();

  const updatedCountries = countries.map(country => ({
    label: country.name,
    value: country.isoCode,
    ...country,
  }));

  return updatedCountries;
};

export const getUpdatedStates = (State, countryCode) => {
  return State.getStatesOfCountry(countryCode).map(state => ({
    label: state.name,
    value: state.name,
    ...state,
  }));
};

export const getUpdatedCitiesByState = (City, countryCode, stateCode) => {
  return City.getCitiesOfState(countryCode, stateCode).map(city => ({
    label: city.name,
    value: city.name,
    ...city,
  }));
};

export const getUpdatedCitiesByCountry = (City, countryCode) => {
  return City.getCitiesOfCountry(countryCode).map(city => ({
    label: city.name,
    value: city.name,
    ...city,
  }));
};
