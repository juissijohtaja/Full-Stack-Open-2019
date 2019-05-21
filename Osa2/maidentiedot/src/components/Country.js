import React from 'react'

const Country = ({ name, capital, population, languages, flag }) => {
    const langs = languages.map(i => <li key={i.name}>{i.name}</li>)
    return (
      <>
        <h2>{name}</h2>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <h3>Languages</h3>
        <ul>
            {langs}
        </ul>
        <img src={flag} width="100px" height="auto" />
      </>
    )
  }

  export default Country
  