import React from 'react'
import './App.css'
const Bread = (props) =>{
return(
    
    <div className="breadcrumb">

    {props.children}

  </div>
)
}
export default Bread;