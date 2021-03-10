
import React from "react"
import { useSelector } from "react-redux"

// styles
import "./CountryDetails.scss"

// utils
import {checkExists} from "../../utils/utils"

// components
import {BackButton} from "../../components/BackButton/BackButton"

export const CountryDetails = ()=>{


  const selectCountry = useSelector((state)=>state.CountriesReducer.selectedCountry);

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

      <BackButton />
      
    </div>


  )
}