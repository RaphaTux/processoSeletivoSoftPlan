import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Thunks 
import {getCoutries} from "../../redux/thunks/coutriesThunk"

// styles
import "./Countries.scss"

// componnets
import {CountryItem} from "./Components/CountryItem/CountryItem"

// utils
import {checkExists} from "../../utils/utils"

export const  Countries = () =>  {

  const countryList = useSelector((state) => state.CountriesReducer.countryList);
  const dispatch = useDispatch();
  const [findCountry,setFindCountry] = useState("");

    useEffect(()=>{
      dispatch(getCoutries())
    },[dispatch])


    const filteredList = useMemo(()=>{

      if(!checkExists(countryList)) return

        const CountryFound =  countryList.filter((country)=>{
            return country.name.toLowerCase().indexOf(findCountry.toLowerCase()) > -1;
        })

        if(checkExists(CountryFound) && CountryFound.length > 0) return CountryFound

        return countryList;

    },[findCountry,countryList])



    const getCountry = useCallback(()=>{

      const text = document.getElementById("finder").value;
      setFindCountry(text)

    },[])


    
    if(!checkExists(filteredList))return null;
    if(checkExists(countryList) && !checkExists(filteredList)) return <div> País Não encontrado </div>

    return (
      <div className="countries">

        <div className="countries__find-country">
            
            {"Pesquisar país "}
            <input id="finder" type="text"  />

            <button onClick={()=> getCountry()}>
              Buscar
            </button>
            <button onClick={()=> setFindCountry("")}>
              Limpar
            </button>

        </div>


        <div className="countries__container">
        {filteredList.map((country,key)=>
        <CountryItem country ={country} key={key}  />
       )}
      </div>

      </div>
    );
  }


  




  