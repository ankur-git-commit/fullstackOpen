import { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import Stats from "./components/Stats"

export default function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const stateDisplay = (
        <div>
            <h1>Number of feedbacks</h1>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )

    function handleClick(actionType) {
        switch (actionType) {
            case "good":
                setGood((prevCount) => prevCount + 1)
                break
            case "neutral":
                setNeutral((prevCount) => prevCount + 1)
                break
            case "bad":
                setBad((prevCount) => prevCount + 1)
                break
            default:
                console.log("Undefined action type")
        }
    }

    return (
        <>
            <Header />
            <Button
                feedbackType={["good", "neutral", "bad"]}
                onClick={handleClick}
            />
            {stateDisplay}
            <h1>Statistics</h1>
            {good || neutral || bad ?  <Stats good={good} neutral={neutral} bad={bad} /> : "No feedback given"}
        </>
    )
}
