import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { Provider } from 'react-redux'

// routes
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// pages
import {Countries} from "./pages/Countries/Countries"
import {CountryDetails} from "./pages/CountryDetails/CountryDetails" 


// Provider
import {store} from "./redux/store" 


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/countries" exact={true} component={Countries} />
      <Route path="/countries/details" exact={true} component={CountryDetails} />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
