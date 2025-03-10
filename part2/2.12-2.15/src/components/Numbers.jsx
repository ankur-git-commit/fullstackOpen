export default function Numbers({ person, removePerson }) {
    return (
        <>
            <ul>
                {person.map((per) => {
                    return <li key={per.id}>
                        {per.name} {per.number} <button onClick={() => removePerson(per.id)}> delete</button>
                    </li>
                    
                })}
            
            </ul>
        </>
    )
}
