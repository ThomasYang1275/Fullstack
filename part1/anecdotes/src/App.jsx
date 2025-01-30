import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const title = "Anecdote of the Day"
  const titleTwo = "Most Voted Anecdote"
  const [voteList, setVoteList] = useState([1,78,7,50,64,23,67,7])
  const copy = [...voteList]
  const [selected, setSelected] = useState(0)

  const Header = (props) => {
    return(
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  }
  const Button = ({onHit, text}) => (
    <button onClick={onHit}>{text}</button>
  )

  const generateRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const changeAnecdote = () => {
    setSelected(generateRandomInt(anecdotes.length))
  }

  const handleVotes = () => {
    copy[selected] += 1
    setVoteList(copy)
    mostVotedAnecdote()
  }

  const mostVotedAnecdote = () => {
    let x = copy[0]
    let y = 0
    for (let i = 0; i <= copy.length; i++){
      if (x < copy[i]) { //Compares the value of x to whichever value is in the array. If x is bigger, the index of x is returned. If not, x changes value and that index is returned
        x = copy[i]
        y = copy.indexOf(i)
      }
      else {
        y = copy.indexOf(x)
      }
    }
    return(y)
  }

  return (
    <div>
      <Header title={title} />
      {anecdotes[selected]}
      <p>This anecdote has {voteList.at(selected)}</p>
      <p><Button onHit={changeAnecdote} text="Change Anecdote" /> <Button onHit={handleVotes} text="Vote" /></p>
      <Header title={titleTwo} />
      {anecdotes[mostVotedAnecdote()]}
      <p>This anecdote has {voteList.at(mostVotedAnecdote())}</p>
    </div>
  )

}
export default App