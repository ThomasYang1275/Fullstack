import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onHit}>{props.text}</button>
)

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td><td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Report = (props) => {
  const total = props.good + props.neutral + props.bad
  const avg = (props.good - props.bad) / total
  //positiveFeedbackPercentage
  const pFP = (props.good / total) * 100

  if (total === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <StatisticLine text="Good:" value={props.good} />
      <StatisticLine text="Neutral:" value={props.neutral} />
      <StatisticLine text="Bad:" value={props.bad} />
      <StatisticLine text="Total:" value={total} />
      <StatisticLine text="Avg score:" value={avg} />
      <StatisticLine text="Positive feedback percentage:" value={pFP + "%"} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodSelection = () => {
    setGood(good + 1)
  }
  const neutralSelection = () => {
    setNeutral(neutral + 1)
  }
  const badSelection = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Feedback</h1>
      <p>How was your experience?</p>
      <Button onHit={goodSelection} text = 'Good' />
      <Button onHit={neutralSelection} text = 'Neutral'/>
      <Button onHit={badSelection} text =  'Bad'/>

      <h2>Report</h2>
      <Report good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App