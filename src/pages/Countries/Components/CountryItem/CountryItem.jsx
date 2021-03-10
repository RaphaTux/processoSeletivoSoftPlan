
import React, { useCallback } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

// utils
import {COUNTRIES_TYPES} from "../../../../redux/actionTypes"

// styles
import "./CountryItem.scss"

export const CountryItem = (props)=>{
  
  const {country , key } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSelectCountry = useCallback((selectedCountry)=>{

    dispatch({ type: COUNTRIES_TYPES.COUTRY_SET_SELECTED_COUNTRY, payload: selectedCountry })

    history.push("/countries/details");


  },[dispatch,history])


  return(
    <div id={key} className="country-item" onClick={()=>handleSelectCountry(country)}>
          <div className="country-item__country-image">
            <img src={country.flag.svgFile} alt=""/>
            </div>
          <div className="country-item__name-capital">
            <div>{`Nome: ${country.name}`}</div>
            <div>{`Capital: ${country.capital}`}</div>
          </div>
         </div>


  )
}




