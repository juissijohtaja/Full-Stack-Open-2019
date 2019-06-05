import React from 'react'
import Name from './Name'
import Country from './Country';

const RowsFiltered = (props) => {
    console.log("RowsFiltered newFilter", props.filter)
    const filter = props.filter
    const countries = props.countries
    const eventHandler = props.eventHandler
    console.log("kakka kakka", eventHandler)
    const newList = countries.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).map(i =>
        <Name key={i.name} name={i.name} eventHandler={eventHandler}/>
        )
    console.log("newList", newList)
    console.log("newList.length", newList.length)
    const newCountry = countries.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).map(i =>
        <Country key={i.name} name={i.name} capital={i.capital} population={i.population} languages={i.languages} flag={i.flag} />
        )
    const listingMany = (
        <>
            <h2>Countries</h2>
            <ul>
                {newList}
            </ul>
        </>
    )
    const listingOne = (
        <>
            {newCountry}
        </>
    )
    const listingToomany = (
        <>
            <p>Too many matches, specify another filter</p>
        </>
    )
    if (newList.length > 1 && newList.length <= 10) {
        return listingMany
    } else if (newList.length === 1) {
        return listingOne
    } else {
        return listingToomany
    }
  }

export default RowsFiltered
