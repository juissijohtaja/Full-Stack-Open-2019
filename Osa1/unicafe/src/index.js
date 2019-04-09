import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const Statistic = props => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    const total = good + neutral + bad
    const countPositive = () => {
        const pospercent = 100 * good / total
        if (total > 0) {
            return Math.round(pospercent * 100) / 100 + " %"
        }
        return 0;
    }
    const countMean = () => {
        const mean = ((good * 1) - (bad * 1)) / total
        if (total > 0) {
            return Math.round(mean * 100) / 100
        }
        return 0
    }
    console.log(total)
    if (total > 0) {
        return (
            <div>
                <table>
                    <tbody>
                        <Statistic text="Hyvä" value={good} />
                        <Statistic text="Neutraali" value={neutral} />
                        <Statistic text="Huono" value={bad} />
                        <Statistic text="Yhteensä" value={total} />
                        <Statistic text="Keskiarvo" value={countMean()} />
                        <Statistic text="Positiivisia" value={countPositive()} />
                </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        )
    }
  }


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setToValueGood = newValue => {
        setGood(newValue)    
  }
  const setToValueNeutral = newValue => {
    setNeutral(newValue)    
  }
  const setToValueBad = newValue => {
    setBad(newValue)    
  }

  return (
    <div>
      <h2>Anna palautetta</h2>
      <Button handleClick={() => setToValueGood(good + 1)} text="Hyvä" />
      <Button handleClick={() => setToValueNeutral(neutral + 1)} text="Neutraali" />     
      <Button handleClick={() => setToValueBad(bad + 1)} text="Huono" />

      <h2>Statistiikka</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />

      {/* <Button handleClick={() => setToValueGood(0) & setToValueNeutral(0) & setToValueBad(0)} text="Nollaa kaikki" />
      <Button handleClick={() => setToValueGood(good + 10) & setToValueNeutral(neutral + 10) & setToValueBad(bad + 10)} text="Lisää 10 kaikkiin" /> */}

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)