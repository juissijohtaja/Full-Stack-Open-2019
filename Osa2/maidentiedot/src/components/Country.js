import React from 'react'
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles 
import 'react-open-weather/lib/css/ReactWeather.css';


const Country = ({ name, capital, population, languages, flag }) => {
    const langs = languages.map(i => <li key={i.name}>{i.name}</li>)
    return (
      <div id="country">
        <h2>{name}</h2>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <h3>Languages</h3>
        <ul>
            {langs}
        </ul>
        <img src={flag} width="100px" height="auto" alt={name}/>
        <ReactWeather
          forecast="today"
          apikey="90e04d0d71c044bfa86142711190506"
          type="city"
          city={capital}/>
      </div>
    )
  }

  export default Country
  