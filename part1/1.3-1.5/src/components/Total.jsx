// 1.5
export default function Total(props) {
    const totalArray = props.course
    const total = totalArray.parts.reduce(
        (sum, part) => sum + part.exercises,
        0
    )

    return <p>Number of exercises : {total}</p>
}

// 1.4
// function Total(props) {
//     const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

//     return <p>Number of exercises : {total}</p>
// }

// export default Total

// 1.3
// function Total(props) {
//     const total = props.value.reduce((sum, curr) => sum + curr)

//     return <p>Number of exercises : {total}</p>
// }

// export default Total
