import React from 'react'
import RemoveButton from './RemoveButton'

const Name = ({ name, number, id, eventHandler }) => {
    return (
      <li>{name} {number} <RemoveButton text="Poista" handleClick={eventHandler} id={id} name={name} /></li>
    )
  }

  export default Name