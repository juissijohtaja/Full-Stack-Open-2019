import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from './components/Input'
// import Form from './components/Form'
import RowsFiltered from './components/RowsFiltered'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  console.log('render', persons.length, 'persons')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>Country Search</h1>
      <Input text="Find coutries" value={newFilter} handler={handleFilterChange} />
      <RowsFiltered filter={newFilter} persons={persons} />
    </div>
  )

}

export default App