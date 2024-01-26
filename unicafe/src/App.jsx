import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick = {props.handleClick} >
    {props.text}
  </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const Statistics = (props) => {
  if (props.all>0) {
  return (
    <table>
      <tbody>
     <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="average" value ={(props.good-props.bad)/props.all} />
      <StatisticLine text="positive" value ={(props.good)/props.all} />
      </tbody>
      </table>
  )
  }
  else return (
  <div>No feedback given</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setNewGood = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const setNewNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const setNewBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={setNewGood} text = "good"/>
      <Button handleClick={setNewNeutral} text = "neutral"/>
      <Button handleClick={setNewBad} text = "bad"/>
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  )
}

export default App