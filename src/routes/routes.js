import { BrowserRouter, Switch, Route } from 'react-router-dom'


// pages
import {Countries} from "../pages/Countries/Countries"
import {CountryDetails} from "../pages/CountryDetails/CountryDetails"


export const routes = () =>{


  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Countries}   />  
        <Route path="/countries/details/" exact={true} component={CountryDetails}   />  
      </Switch>    
    </BrowserRouter>
  )
}