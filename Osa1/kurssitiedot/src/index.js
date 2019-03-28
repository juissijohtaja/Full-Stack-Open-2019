import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
            name: 'Reactin perusteet',
            exercises: 10
            },
            {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
            },
            {
            name: 'Komponenttien tila',
            exercises: 14
            }
        ]
    }

    return (
    <div>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />            
    </div>
    )
}

const Header = (props) => {
    console.log(props)
    return <h1>{props.title}</h1>
}

const Content = (props) => {
    console.log(props)
    return (
        <>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </>
    )
}

const Part = (props) => {
    console.log(props)
    return <p>{props.part.name} {props.part.exercises}</p>
}

const Total = (props) => {
    console.log(props)
    return <p>yhteensä {props.parts[0].exercises 
        + props.parts[0].exercises 
        + props.parts[0].exercises} tehtävää</p>
}

ReactDOM.render(<App />, document.getElementById('root'))