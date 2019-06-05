import React from 'react'


const DetailsButton = (props) => {
    
return ( 
  <>
    <button onClick={props.handleClick} id={props.id} name={props.name}>{props.text}</button>
  </>
)}

export default DetailsButton