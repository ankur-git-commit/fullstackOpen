import { useState } from "react"
import Numbers from "./components/Numbers"
import Header from "./components/Header"
import AddItem from "./components/AddItem"
import Search from "./components/Search"

function App() {
    const [person, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ])

    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(event) {
        setSearchTerm(event.target.value)
    }

    function handleName(event) {
        setNewName(event.target.value)
    }

    function addPerson(event) {
        event.preventDefault()
        const trimmedName = newName.trim()

        if (
            person.some(
                (person) =>
                    person.name === trimmedName || person.number === newNumber
            )
        ) {
            return alert(
                `${trimmedName} or number already exists in the phonebook`
            )
        }

        const personObject = {
            name: trimmedName,
            number: newNumber,
            id: Math.max(person.length) + 1,
        }
        setPersons([...person, personObject])
        setNewName("")
        setNewNumber("")
    }

    const filteredContent = searchTerm
        ? person.filter(ppl =>
            ppl.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : person

    return (
        <>
            <Header headerName={"Phonebook"} />

            <Search searchTerm={searchTerm} handleSearch={handleSearch} />

            <Header headerName={"Add entry"} />

            <AddItem
                handleName={handleName}
                addPerson={addPerson}
                newName={newName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
            />

            <Header headerName={"Number"} />

            <Numbers person={filteredContent} />
        </>
    )
}

export default App
