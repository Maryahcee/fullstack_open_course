import { useState } from "react"
const Button = ({handleClick,text}) => {
  
  return (
    <button onClick={handleClick}>
      {text}
  </button>
 )
}
 
const Display = ({title,anecdotes,votes}) => {
 
  return (
    <div>
      <h2>{title}</h2>
      <p>{anecdotes}</p>
      <p>Has {votes || 0} votes</p>
    </div>
  )
}


const App = () =>{
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
  // selected = [0,1,2,3,4,5,6,7]
  //array length 8
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  
  const handleNext = () => {
    const randomAnecdotes = Math.floor(
      Math.random() * anecdotes.length
      // 0.111....0.9999 * 8
    )
    return (
      setSelected(randomAnecdotes)
    )
  }

 //Save vote for each anecdote
 const handleVotes = () => {
  setVotes((prevVotes) => ({
    ...prevVotes,
    [selected]: (prevVotes[selected]|| 0) + 1,
  }))
 }
  
  // {0:3,1:4}

  const getHighestVotes = (votes) => { 
    let maxKey = null
    let maxValue = 0
    for (const key in votes) {
      if (votes[key] > maxValue) {
        maxValue = votes[key]
        maxKey = key
      }
    }
    return maxKey
  }

  const highestVoted = getHighestVotes(votes)

      return (
    <>
      <Display
        title = 'Anecdote of the day'
        anecdotes={anecdotes[selected]}
        votes ={votes[selected]}
      />
        <Button handleClick={handleVotes} text='votes'/>
        <Button handleClick={handleNext} text='Next anecdote' />
        {highestVoted  && <Display
          title='Anecdote with most votes'
          votes={votes[highestVoted]}
          anecdotes={anecdotes[highestVoted]}
      />}
     
    </>
  )
}

export default App
