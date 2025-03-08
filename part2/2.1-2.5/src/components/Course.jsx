import Header from "./Header"
import Content from './Content'
import Stats from './Stats'

export default function Course({ course }) {
    return (
        <>
            <Header heading={course.name} />
            <Content parts={course.parts} />
            <Stats parts={course.parts}/>
        </>
    )
}
