// 1.5
export default function Content(props) {
    const contentObject = props.course
    return (
        <>
            {contentObject.parts.map((part, index) => (
                <p key={index}>
                    {part.name} : {part.exercises}
                </p>
            ))}
        </>
    )
}

// 1.4
// function Content(props) {
//     return (
//         <>
//             {props.parts.map((part, index) => (
//                 <p key={index}>
//                     {part.name} : {part.exercises}
//                 </p>
//             ))}
//         </>
//     )
// }

// export default Content

// 1.3
// function Content(props){
//     return <p>{props.part} : {props.exercise}</p>
// }

// export default Content
