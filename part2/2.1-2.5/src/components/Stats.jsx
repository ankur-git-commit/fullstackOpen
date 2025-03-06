export default function Stats({ parts }) {
    // console.log(parts)
    // console.log(parts.exercises)
    const totalExercise = parts.reduce((sum, part) => sum + part.exercises, 0)

    return <strong>total of {totalExercise}</strong>
}
