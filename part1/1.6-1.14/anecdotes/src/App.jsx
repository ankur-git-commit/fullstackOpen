/* eslint-disable no-unused-vars */
import { useState, useRef } from "react"
import Button from "./components/Button"

const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
]

function App() {
    const [selected, setSelected] = useState(anecdotes[generateRandomQuote()])
    const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
    let indexRef = useRef(0) // used React ref just for practice, can be replaced with useState variable

    function generateRandomQuote() {
        const anecdotesIndex = Math.floor(Math.random() * anecdotes.length)
        return anecdotesIndex
    }

    function handleClick() {
        const anecdotesIndex = generateRandomQuote()
        setSelected(anecdotes[anecdotesIndex])
        indexRef.current = anecdotesIndex
        // console.log(index)
    }

    function handleVote() {
        setVote((prevVote) => {
            const newVotes = [...prevVote]
            newVotes[indexRef.current] += 1
            return newVotes
        })
    }

    const maxVotes = Math.max(...vote)
    const val = vote.indexOf(maxVotes)
    console.log(vote)


    return (

        <>
            <div>
                <h1>Anecdote of the day</h1>
                <p>{selected}</p>
                <p>has {vote[indexRef.current]} votes</p>
            </div>
            <Button onClick={handleClick} btnName={"nextAnecdotes"} />
            <Button onClick={handleVote} btnName={"vote"} />
              <div>
                <h1>Ancedote with the most votes</h1>
                <p>{anecdotes[val]}</p>
                <p>has {maxVotes} votes</p>
              </div>
        </>
    )
}

export default App
