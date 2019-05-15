import React, { useState } from 'react'
import Input from './components/Input'
import RowsFiltered from './components/RowsFiltered'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  

  const addName = (event) => {
    event.preventDefault()
    console.log('persons', persons)
    if (!persons.some(i => i.name === newName) && newName.length > 0 && newNumber.length > 0) {
      const newPerson = { 
        name: newName,
        number: newNumber
       }
      console.log('newPerson', newPerson)
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} on jo luettelossa tai nimi/numero puuttuu`)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  /* const Rows = () => persons.map(i =>
    <Name key={i.name} name={i.name} number={i.number} />
  ) */

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Input text="Rajaa näytettäviä" value={newFilter} handler={handleFilterChange} />
      <h2>Lisää uusi</h2>
      <form onSubmit={addName}>
      <Input text="Nimi" value={newName} handler={handleNameChange} />
      <Input text="Numero" value={newNumber} handler={handleNumberChange} />
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <RowsFiltered filter={newFilter} persons={persons} />
    </div>
  )

}

export default App