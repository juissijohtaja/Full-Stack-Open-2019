import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from './components/Input'
import RowsFiltered from './components/RowsFiltered'


const App = () => {
  const [ countries, setCountries] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('')
  
  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleShowDetails = (event) => {
    event.preventDefault()
    console.log("Show Details")
    const name = event.target.getAttribute("name");
    console.log("Name", name)
    setNewFilter(name)
  }

  return (
    <div>
      <h1>Country Search</h1>
      <Input text="Find coutries" value={newFilter} handler={handleFilterChange} />
      <RowsFiltered filter={newFilter} countries={countries} eventHandler={handleShowDetails} />
    </div>
  )

}

export default App