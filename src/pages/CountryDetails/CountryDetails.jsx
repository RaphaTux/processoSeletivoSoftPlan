
import React from "react"

// styles
import "./CountryDetails.scss"

export const CountryDetails = (props)=>{
  const {country , key } = props;

  return(
    <div id={key} class="country-detail">
        country details 
    </div>


  )
}