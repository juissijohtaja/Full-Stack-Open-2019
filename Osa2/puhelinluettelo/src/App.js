import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from './components/Input'
import Form from './components/Form'
import RowsFiltered from './components/RowsFiltered'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    console.log('persons', persons)
    if (!persons.some(i => i.name === newName) && newName.length > 0 && newNumber.length > 0) {
      const newPerson = { 
        name: newName,
        number: newNumber
       }
      console.log('newPerson', newPerson)
      /* setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('') */

      axios.post('http://localhost:3001/persons', newPerson).then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
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
      <Form submit={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numerot</h2>
      <RowsFiltered filter={newFilter} persons={persons} />
    </div>
  )

}

export default App