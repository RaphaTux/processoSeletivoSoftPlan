
import React from "react"

// styles
import "./CountryDetails.scss"

export const CountryDetails = (props)=>{
  const {country , key } = props;

  return(
    <div id={key} class="country-detail">
          <div className="country-detail__country-image">
            <img src={country.flag.svgFile} alt=""/>
            </div>
          <div className="country-detail__name-capital">
            <div>{`Nome: ${country.name}`}</div>
            <div>{`Capital: ${country.capital}`}</div>
          </div>
         </div>


  )
}