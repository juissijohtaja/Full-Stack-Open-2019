import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import Form from './components/Form'
import RowsFiltered from './components/RowsFiltered'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ notification, setNotification ] = useState({message: null, style: null})

  
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    console.log('persons', persons)
    if (!persons.some(i => i.name.toLowerCase() === newName.toLowerCase()) && newName.length > 0 && newNumber.length > 0) {
      const newPerson = { 
        name: newName,
        number: newNumber
       }
      console.log('newPerson', newPerson)

      personService
        .create(newPerson).then(returnedPersons => {  
        setPersons(persons.concat(returnedPersons))
        setNewName('')
        setNewNumber('')
        console.log("Great Success!")

        const newNotification = { 
          message: `Henkilö '${newPerson.name}' lisättiin`,
          style: "success"
         }
  
        setNotification( newNotification )
  
        setTimeout(() => {
          setNotification({message: null, style: null})
        }, 5000)
        
      })
      .catch(error => {
        // pääset käsiksi palvelimen palauttamaan virheilmoitusolioon näin
        console.log("Vittu virhe!!")
        console.log(error.response.data)

        const newNotification = { 
          message: `${error.response.data.error}`,
          style: "failure"
         }
  
        setNotification( newNotification )
  
        setTimeout(() => {
          setNotification({message: null, style: null})
        }, 5000)

      })

      

    } else if(persons.some(i => i.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(`${newName} on jo luettelossa. Korvataanko vanha uudella numerolla?`)) {
        const newPerson = { 
          name: newName,
          number: newNumber
         }
        const personUpdate = persons.find(i => i.name.toLowerCase() === newName.toLowerCase())
        console.log("personUpdate", personUpdate)
        const id = personUpdate.id
        console.log("id", id)
        personService
        .update(id, newPerson)
        .then(() => personService.getAll())
        .then(remainingPersons => {
          setPersons(remainingPersons)
          const newNotification = { 
            message: `Henkilö '${newPerson.name}' muutettiin`,
            style: "success"
          }
    
          setNotification( newNotification )
    
          setTimeout(() => {
            setNotification({message: null, style: null})
          }, 5000)
        })
        .catch(error => {
          /* alert(
            `the person '${newName}' was already deleted from server`
          ) */
          const newNotification = { 
            message: `Henkilö '${newPerson.name}' oli jo poistettu`,
            style: "failure"
          }
    
          setNotification( newNotification )
    
          setTimeout(() => {
            setNotification({message: null, style: null})
          }, 5000)
          setPersons(persons.filter(n => n.id !== id))
          
        })

      }
    } else {
      // alert(`Nimi tai numero puuttuu`)
      const newNotification = { 
        message: `Nimi tai numero puuttuu`,
        style: "failure"
      }

      setNotification( newNotification )

      setTimeout(() => {
        setNotification({message: null, style: null})
      }, 5000)
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

  const handleDeleteName = (event) => {
    event.preventDefault()
    console.log("Remove ID")
    const id = event.target.getAttribute("id");
    const name = event.target.getAttribute("name");
    console.log("ID", id)
    console.log("Name", name)
    
    if (window.confirm(`Poistetaanko ${name}?`)) {
      personService
        .remove(id)
        .then(() => personService.getAll())
        .then(remainingPersons => {
          setPersons(remainingPersons)
        })
    }

    const newNotification = { 
      message: `Henkilö '${name}' poistettiin`,
      style: "success"
     }

    setNotification( newNotification )

    setTimeout(() => {
      setNotification({message: null, style: null})
    }, 5000)

  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Notification notification={notification} />
      <Input text="Rajaa näytettäviä" value={newFilter} handler={handleFilterChange} />
      <h2>Lisää uusi</h2>
      <Form submit={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numerot</h2>
      <RowsFiltered filter={newFilter} persons={persons} eventHandler={handleDeleteName} />
    </div>
  )

}

export default App