
import React from "react"

// styles
import "./CountryItem.scss"

export const CountryItem = (props)=>{
  const {country , key } = props;

  return(
    <div id={key} class="country-item">
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




