
import React from "react"
import { useHistory } from "react-router";

// styles
import "./CountryItem.scss"

export const CountryItem = (props)=>{
  
  const {country , key } = props;
  const history = useHistory()


  return(
    <div id={key} class="country-item" onClick={() => history.push("/countries/details")}>
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




