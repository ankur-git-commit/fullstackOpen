export default function Stats({ good, neutral, bad}){
    const totalFeedbacks = good + neutral + bad
    const averageScore = (good * 1 + neutral * 0 + bad * -1)/totalFeedbacks
    const posFeedback = (good/totalFeedbacks) * 100
    return (
        <>
            <p>All: {totalFeedbacks}</p>
            {totalFeedbacks && <p>Average: {averageScore}</p>}
            <p>Positive feedback: {posFeedback}</p>
        </>
    )
}