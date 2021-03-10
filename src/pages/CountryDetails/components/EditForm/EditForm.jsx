import React, { useCallback, useState } from "react"

// styles
import "./EditForm.scss"

// components
import {ActionButton} from "../../../../components/ActionButton/ActionButton"
import { useDispatch } from "react-redux";

// utils
import {COUNTRIES_TYPES} from "../../../../redux/actionTypes"




export const EditForm = (props) =>{

  const {country,action} = props;
  
  const [countryName, setCountryName] = useState(country.name)
  const [countryCapital,setCountryCapital ] = useState(country.capital)
  const [countryArea,setCountryArea] = useState(country.area)
  const [countryPopulation,setCountryPopulation] = useState(country.population)
  const [countryTopLevelDomains,setCountryTopLevelDomains] = useState(country.topLevelDomains)

  const dispatch = useDispatch();

  console.log(props.country)


  const handleChangeInput = useCallback((elementId)=>{


      const inputText = document.getElementById(elementId).value

      switch(elementId){

        case "name": 
          setCountryName(inputText)
          break;
        
        case "capital": 
          setCountryCapital(inputText);
          break;

        case "area": 
          setCountryArea(inputText)
          break;
          
        case "population": 
          setCountryPopulation(inputText)
          break;
          
        case "topLevel": 
          setCountryTopLevelDomains(inputText)
          break;

        default:
          return;


      }




  },[])


  const handleSave = useCallback(()=>{

    const infoSave = {

      "area":countryArea,
      "capital":countryCapital,
      "flag":country.flag,
      "name":countryName,
      "population":countryPopulation,
      "topLevelDomains":countryTopLevelDomains
    } 

    action()
    dispatch({type:COUNTRIES_TYPES.COUTRY_SET_SELECTED_COUNTRY , payload:infoSave})



  },[dispatch,
    countryArea,
    countryCapital,
    countryName,
    countryPopulation,
    countryTopLevelDomains,
    action,country.flag])





return(


  <div className="edit-form">

    <div>{"Editar as informações "}</div>
 
    <div className="edit-form__container">
      
      <div className="edit-form__container__box-content">

        <div> Informaçoes Atuais </div>

        <div>
        <span> Nome:</span>
        <span>{countryName}</span>
      </div>

      <div>
        <span> Capital : </span>
        <span> {countryCapital} </span>
      </div>

      <div>
        <span>Área: </span>
        <span> {countryArea} </span>
      </div>
      <div>
        <span> População:</span>
        <span> {countryPopulation} </span>
      </div>
      <div>
        <span>Top Domains:</span>
        <span> {countryTopLevelDomains[0].name} </span>
      </div>

      </div>

      <div className="edit-form__container__box-content">
      <div> Novas Informações  </div>

      <div>
        <span> Nome:</span>
        <input id="name" type="text"  onChange={()=>handleChangeInput("name")}/>
      </div>

      <div>
        <span> Capital : </span>
        <input id="capital" type="text" onChange={()=>handleChangeInput("capital")}/>
      </div>

      <div>
        <span>Área: </span>
        <input id="area"  type="text" onChange={()=>handleChangeInput("area")}/>
      </div>
      <div>
        <span> População:</span>
        <input id="population"  type="text" onChange={()=>handleChangeInput("population")}/>
      </div>
      <div>
        <span>Top Domains:</span>
        <input id="topLevel"  type="text" onChange={()=>handleChangeInput("topLevel")}/>
      </div>

      <div>
      <ActionButton 
          text={"Salvar"} 
          action={()=>handleSave()}
          color = {"tomato"}
          />
      </div>

    </div>
      
      
      
      

    </div>


  </div>
)


}