import React from 'react'
import Name from './Name'

const RowsFiltered = (props) => {
    console.log("Filter:", props.filter)
    const filter = props.filter
    const persons = props.persons
    const eventHandler = props.eventHandler
    const newList = persons.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).map(i =>
        <Name key={i.name} name={i.name} number={i.number} id={i.id} eventHandler={eventHandler} />
        )
    return (
        <ul>
            {newList}
        </ul>
    )
  }

export default RowsFiltered