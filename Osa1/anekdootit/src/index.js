import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const MostVotes = () => {
    let eniten = anecdotes[0]
    let indeksi = 0
    let voteInfo = "No votes yet"
    anecdotes.forEach(function (item, index) {
        if (item.aanet > eniten.aanet) {
            eniten = item
            indeksi = index
        }
    })
    console.log("korkein indeksi: " + indeksi)
    const topVote = anecdotes[indeksi].aanet
    console.log("korkein vote: " + topVote)
    if (topVote > 0) {
        voteInfo = anecdotes[indeksi].anekdootti
    }

    return (
        <div id="topvotes">
            <p className="topintro">Anecdote with most votes</p>
            <p className="topanekdote">{voteInfo}</p>
            <p className="topanekdote">Has {topVote} votes</p>
        </div>
    )
}  

const randomizer = () => {
    return Math.floor(Math.random() * (anecdotes.length - 1))
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  const setToValueSelected = newValue => {
    console.log("Anecdote ennen: " + selected)
    setSelected(newValue)
    console.log("Anecdote jälkeen: " + newValue)
    console.log("Vote ennen: " + vote)
    setVote(props.anecdotes[newValue].aanet)
    console.log("Vote jälkeen: " + props.anecdotes[newValue].aanet)
  }

  const logVote = () => {
    console.log("Vote ennen: " + vote)
    props.anecdotes[selected].aanet++
    const newVote = props.anecdotes[selected].aanet
    setVote(newVote)
    console.log("Vote jälkeen: " + newVote)
  }


  return (
    <div>
      <p className="anecdote">{props.anecdotes[selected].anekdootti}</p>
      <p className="vote">Has {props.anecdotes[selected].aanet} votes</p>
      <Button handleClick={() => logVote()} text="Vote" />
      <Button handleClick={() => setToValueSelected(randomizer(props.anecdotes))} text="Next Anecdote" />
      <MostVotes />
    </div>
  )
}

const anecdotes = [
    { anekdootti: 'If it hurts, do it more often', aanet: 0 },
    { anekdootti: 'Adding manpower to a late software project makes it later!', aanet: 0 },
    { anekdootti: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', aanet: 0 },
    { anekdootti: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', aanet: 0 },
    { anekdootti: 'Premature optimization is the root of all evil.', aanet: 0 },
    { anekdootti: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', aanet: 0 }
  ]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)