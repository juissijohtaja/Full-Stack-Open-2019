import React from 'react'

const Input = (props) => (
    <div>
        {props.text}: <input value={props.value} onChange={props.handler} />
    </div>
)

export default Input