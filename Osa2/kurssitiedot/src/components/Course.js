import React from 'react'

const Course = (props) => {
    console.log("Course props", props)
    const elements = props.course
    const rows = () => elements.map(i => (
        <div key={i.id}>
            <Header title={i.name} />
            <Content parts={i.parts} />
            <Total parts={i.parts} />
        </div> 
    )) 
    return (
        <>
            {rows()}
        </>
    )
}

const Header = (props) => {
    console.log("Header props", props)
    return <h1>{props.title}</h1>
}

const Content = (props) => {
    console.log("Content props", props)
    const elements = props.parts
    return (
        <>
            <Part courses={elements} />
        </>
    )
}

const Part = (props) => {
    console.log("Part props", props)
    const elements = props.courses
    const rows = () => elements.map(i => <li key={i.id}>{i.name} {i.exercises}</li>) 
    return (
        <ul>
            {rows()}
        </ul>
    )
}

const Total = (props) => {
    console.log("Total props", props)
    const elements = props.parts
    const countTotal = () => {
        const totalSum = elements.reduce((yht, osa) => yht + osa.exercises, 0);
        console.log("totalSum", totalSum)    
        return totalSum
    }
    return <p className="total">Yhteensä {countTotal()} tehtävää</p>
}

export default Course