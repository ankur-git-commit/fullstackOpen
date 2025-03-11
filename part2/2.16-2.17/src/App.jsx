import { useState, useEffect } from "react"
import modules from "./services/modules.js"

import Numbers from "./components/Numbers"
import Header from "./components/Header"
import AddItem from "./components/AddItem"
import Search from "./components/Search"

function App() {
    const [person, setPersons] = useState([])

    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    // console.log(modules.getPerson().then(response => response.data))
    // useEffect(() => {
    //     modules.getPerson().then((response) => {
    //         console.log(response)
    //         const data = response.data
    //         setPersons(data)
    //     })
    // }, [])
    useEffect(() => {
        modules.getPerson().then((data) => {
            // console.log(data)
            setPersons(data)
        })
    }, [])

    function handleSearch(event) {
        setSearchTerm(event.target.value)
    }

    function handleName(event) {
        setNewName(event.target.value)
    }

    function addPerson(event) {
        event.preventDefault()
        const trimmedName = newName.trim()

        const existingPerson = person.some(
            (person) =>
                person.name === trimmedName || person.number === newNumber)
            ? person.find((per) => per.name === trimmedName || per.number === newNumber)
            : false

        if (existingPerson) return updatePerson(existingPerson, trimmedName)

        const personObject = {
            name: trimmedName,
            number: newNumber,
            id: (Math.max(person.length) + 1).toString(),
        }

        modules.create(personObject).then((response) => {
            console.log(response)
            setPersons([...person, personObject])
            setNewName("")
            setNewNumber("")
        })
    }

    function updatePerson(existingPerson, trimmedName) {
        if (existingPerson) {
            const confirmation = confirm(
                `${trimmedName} - ${newNumber} already exists in the phonebook`
            )
            if (confirmation) {
                const updatedValues = {
                    id: existingPerson.id,
                    name: newName.trim(),
                    number: newNumber,
                }
                // console.log(updatedValues)

                return modules
                    .update(updatedValues.id, updatedValues)
                    .then((response) => {
                        console.log(response)
                        setPersons(
                            person.map((p) =>
                                p.id === existingPerson.id ? updatedValues : p
                            )
                        )
                        setNewName("")
                        setNewNumber("")
                    })
            } else return
        }
    }

    function removePerson(id) {
        if (
            window.confirm(`would you like to delete the person with id ${id}?`)
        ) {
            modules
                .remove(id)
                .then(() => {
                    setPersons((prevPersons) =>
                        prevPersons.filter((p) => p.id !== id)
                    )
                })
                .catch((error) => console.log(error))
        }
    }

    const filteredContent = searchTerm
        ? person.filter((ppl) =>
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

            <Numbers person={filteredContent} removePerson={removePerson} />
        </>
    )
}

export default App
