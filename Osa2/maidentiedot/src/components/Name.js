import React from 'react'
import DetailsButton from './DetailsButton'


const Name = ( props ) => {
  console.log("name", props.name)
  console.log("eventHandler", props.eventHandler)
  console.log("props", props)
    return (
      <li>{props.name} <DetailsButton text="Show" handleClick={props.eventHandler} name={props.name} /></li>
    )
  }

  export default Name