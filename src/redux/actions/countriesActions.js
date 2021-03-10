// types
import {COUNTRIES_TYPES} from "../actionTypes"



export const setCountries = value => ({

  type: COUNTRIES_TYPES.COUTRY_SET_ALL_COUTRIES,
  allCountries: value
});

export const setSelectedCountry = value => ({

  type: COUNTRIES_TYPES.COUTRY_SET_SELECTED_COUNTRY,
  selectedCountry: value
});




