import React from 'react'


const RemoveButton = (props) => {
    
return ( 
  <>
    <button onClick={props.handleClick} id={props.id} name={props.name}>{props.text}</button>
  </>
)}

export default RemoveButton