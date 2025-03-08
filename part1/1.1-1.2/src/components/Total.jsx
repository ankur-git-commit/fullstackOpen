function Total(props) {
    const total = props.value.reduce((sum, curr) => sum + curr)

    return <p>Number of exercises : {total}</p>
}

export default Total
