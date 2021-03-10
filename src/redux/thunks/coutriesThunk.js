import {COUNTRIES_TYPES} from "../actionTypes"

export const getCoutries = () => {


   return async function(dispatch) {

    fetch('https://countries-274616.ew.r.appspot.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `
  query {
    Country {
      name
      capital
      area
      population
      flag {
        emoji
        emojiUnicode
        svgFile
      }
      topLevelDomains {
        name
      }
    }
  }
  

` }),
})
  .then(res => res.json())
  .then(res => dispatch({ type: COUNTRIES_TYPES.COUTRY_SET_ALL_COUTRIES, payload: res.data.Country }));
  };
};





