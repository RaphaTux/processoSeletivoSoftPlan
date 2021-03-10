

// Types
import {COUNTRIES_TYPES} from "../actionTypes"


const initialState = {
  countryList: null
};
export const countriesReducer = (state = initialState, action) => {

  const { payload, type } = action;


  switch (type) {
    case COUNTRIES_TYPES.COUTRY_SET_ALL_COUTRIES:
      return {
        ...state,
        countryList: payload
      };
    default:
      return state;
  }
};