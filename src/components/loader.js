import React from 'react'
import Loader from "./loader.gif";
import "./loader.css";

const loader=()=> {
  
    return (
      <div className='loader' ><img src={Loader} alt="Loading"  /></div>
    )
  
}

export default loader