import React from 'react'
import Input from './Input'
import Button from './Button'

const Form = (props) => (
    <form onSubmit={props.submit}>
      <Input text="Nimi" value={props.newName} handler={props.handleNameChange} />
      <Input text="Numero" value={props.newNumber} handler={props.handleNumberChange} />  
      <Button text="Lisää" />
    </form>
)
export default Form