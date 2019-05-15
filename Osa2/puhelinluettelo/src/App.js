import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  

  const addName = (event) => {
    event.preventDefault()
    const newPerson = { name: newName }
    console.log('newPerson', newPerson)
    console.log('persons', persons)
    if (!persons.some(i => i.name === newName)) {
      setPersons(persons.concat(newPerson))
      setNewName('')
    } else {
      alert(`${newName} on jo luettelossa`)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Name = ({ name }) => {
    return (
      <li>{name}</li>
    )
  }

  const rows = () => persons.map(i =>
    <Name key={i.name} name={i.name} />
  )

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addName}>
        <div>
          nimi: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )

}

export default App