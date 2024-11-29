import { useState } from "react"

const StatisticLine = (props) => {
  return(
    <>
        <tr>
          <td>{props.feedbackText}</td>
          <td>{props.feedBackValue}</td>
        </tr>
    </>
  )
}

const Statistics = (props) => {
  const total = props.goodFeedback + props.neutralFeedback + props.badFeedback
  const average = total === 0 ? 0 : (props.goodFeedback - props.badFeedback) / total
  const positive = total === 0 ? 0 : (props.goodFeedback / total) * 100
  
  if (total === 0){
    return (
      <p>No feedback given</p>
    )
  }  
    return (
      <table>
        <tbody>
          <StatisticLine feedbackText='Good' feedBackValue={props.goodFeedback} />
          <StatisticLine feedbackText='Neutral' feedBackValue={props.neutralFeedback} />
          <StatisticLine feedbackText='Bad' feedBackValue={props.badFeedback} />
          <StatisticLine feedbackText='All' feedBackValue={total} />
          <StatisticLine feedbackText='Average' feedBackValue={average} />
          <StatisticLine feedbackText='Positive' feedBackValue={`${positive}%`} />
        </tbody>
    </table>
    )
}

function App() {
  //Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // event handler 
  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

  //handle good event handler
  const handleGood = () => { setGood(good + 1) }
  
  //handle neutral event handler
  const handleNeutral = () => { setNeutral(neutral + 1) }
  
  //handle bad event handler
  const handleBad = () => {setBad(bad+1)}
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <h2>statistics</h2>
      <Statistics
        goodFeedback={good}
        neutralFeedback={neutral}
        badFeedback={bad}
      />
    </div>
  )
}

export default App
