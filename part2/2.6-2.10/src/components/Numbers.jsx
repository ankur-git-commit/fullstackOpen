export default function Numbers({ person }) {
    return (
        <>
            <ul>
                {person.map((per) => (
                    <li key={per.id}>{per.name} {per.number}</li>
                ))}
            </ul>
        </>
    )
}
