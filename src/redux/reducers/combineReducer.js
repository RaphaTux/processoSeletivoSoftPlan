import { countriesReducer } from './countriesReducer';


import { combineReducers } from 'redux';




export const Reducers = combineReducers({
  CountriesReducer: countriesReducer,
});