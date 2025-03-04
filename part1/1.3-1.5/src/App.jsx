import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

// 1.5
export default function App() {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    }
    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )
}

//1.4
// function App() {
//     const course = "Half Stack application development"
//     const parts = [
//         {
//             name: "Fundamentals of React",
//             exercises: 10,
//         },
//         {
//             name: "Using props to pass data",
//             exercises: 7,
//         },
//         {
//             name: "State of a component",
//             exercises: 14,
//         },
//     ]
//     return (
//         <div>
//             <Header course={course} />
//             <Content parts={parts} />
//             <Total parts={parts} />
//         </div>
//     )
// }
// export default App

// 1.3
// function App() {
//     const course = "Half Stack application development"
//     const part1 = {
//         name: "Fundamentals of React",
//         exercises: 10,
//     }
//     const part2 = {
//         name: "Using props to pass data",
//         exercises: 7,
//     }
//     const part3 = {
//         name: "State of a component",
//         exercises: 14,
//     }
//     return (
//         <div>
//             <Header course={course} />
//             <Content part={part1.name} exercise={part1.exercises} />
//             <Content part={part2.name} exercise={part2.exercises} />
//             <Content part={part3.name} exercise={part3.exercises} />
//             <Total value={[part1.exercises, part2.exercises, part3.exercises]} />
//         </div>
//     )
// }
// export default App
