
import React, { useCallback, useState } from "react"
import { useSelector } from "react-redux"

// styles
import "./CountryDetails.scss"

// utils
import {checkExists} from "../../utils/utils"

// Routes
import { useHistory } from "react-router"


// components
import {ActionButton} from "../../components/ActionButton/ActionButton"
import {EditForm} from "./components/EditForm/EditForm"

export const CountryDetails = ()=>{

  const history = useHistory()
  const selectCountry = useSelector((state)=>state.CountriesReducer.selectedCountry);
  const [showForm , setShowForm] = useState(false)


  const togleShowForm = useCallback(()=>{

    setShowForm(!showForm)

  },[showForm])


  if(!(checkExists(selectCountry))) return null;

  return(
    <div  className="country-detail">

      <div className="country-detail__container">  
        <img className="country-detail__country-image" src={selectCountry.flag.svgFile} alt=""/>


        <div className="country-detail__name-capital">
          <div>
            { `Nome: ${selectCountry.name} `}
          </div>
          <div>
            { `Capital: ${selectCountry.capital}`}
          </div>
        </div>

        <div className="country-detail__other-informations"  >
            <div>
              {`Área: ${selectCountry.area}` }
            </div>

            <div>
              {`População: ${selectCountry.population}`}
            </div>
        </div>

        <div className="country-detail__other-informations" >
          <div>
              {`Top Domains: ${selectCountry.topLevelDomains[0].name}` }
          </div>
        </div>
      </div>

      {showForm && <EditForm country={selectCountry} action={togleShowForm}   /> }


      <div className="country-detail__container-button">

        <ActionButton 
          text={"Voltar"} 
          action={()=> history.goBack()}
          color = {"tomato"}
          />

        <ActionButton 
          text={"Editar"} 
          action={()=>togleShowForm()}
          color = {"tomato"}
          />
      </div>

      
      
    </div>


  )
}