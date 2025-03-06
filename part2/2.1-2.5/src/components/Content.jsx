import Part from "./Part"

export default function Content({ parts }){
    // console.log(parts)
    // console.log(Array.isArray(parts))
    return (
        parts.map((part,id) => {
            // console.log(typeof part)
            return <Part key={id} name={part.name} exercises={part.exercises} />
        })
    )


}