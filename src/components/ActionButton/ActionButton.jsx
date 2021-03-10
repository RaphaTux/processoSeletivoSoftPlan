import React from "react"

import "./ActionButton.scss"


export const ActionButton =(props)=>{

  const {text,action,color} = props;
  return(
     <div className="back-button" style={{backgroundColor:color}} onClick={action}>
        {text}
    </div>

  )
}