/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import axios from "axios"
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
    useEffect(() => {
        modules.getPerson().then((data) => {
            console.log(data)
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
            id: (Math.max(person.length) + 1).toString(),
        }

        modules.create(personObject).then((response) => {
            console.log(response)
            setPersons([...person, personObject])
            setNewName("")
            setNewNumber("")
        })
    }

    function removePerson(id){
        if (window.confirm(`would you like to delete the person with id ${id}?`)){
            modules.remove(id).then(response => {
                setPersons(prevPersons => prevPersons.filter(p => p.id !== id))
            })
            .catch(error => console.log(error))
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

            <Numbers person={filteredContent} removePerson={removePerson}/>
        </>
    )
}

export default App
