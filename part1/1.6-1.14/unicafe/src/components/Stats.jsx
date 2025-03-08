export default function Stats({ good, neutral, bad}){
    const totalFeedbacks = good + neutral + bad
    const averageScore = (good * 1 + neutral * 0 + bad * -1)/totalFeedbacks
    const posFeedback = (good/totalFeedbacks) * 100
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th scope="row" align="left">All</th>
                        <td>:</td>
                        <td>{totalFeedbacks}</td>
                    </tr>
                    <tr>
                        <th scope="row" align="left">Average </th>
                        <td>:</td>
                        <td>{averageScore}</td>
                    </tr>
                    <tr>
                        <th scope="row" align="left">Positive</th>
                        <td>:</td>
                        <td>{posFeedback}</td>
                    </tr>
                </tbody>
            </table>


        </>
    )
}