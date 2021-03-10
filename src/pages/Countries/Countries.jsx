import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Thunks 
import {getCoutries} from "../../redux/thunks/coutriesThunk"

// styles
import "./Countries.scss"

// componnets
import {CountryItem} from "./Components/CountryItem/CountryItem"

export const  Countries = () =>  {

  const countryList = useSelector((state) => state.CountriesReducer.countryList);
  const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getCoutries())
    },[dispatch])


    if(countryList=== null || countryList=== undefined) return null;


    return (
      <div className="countries">


        <div className="countries__container">
        {countryList.map((country,key)=>

        <CountryItem country ={country} key={key}  />

        
       )}
      </div>

      </div>
    );
  }


  




  