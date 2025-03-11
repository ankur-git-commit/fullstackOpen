import { useState, useEffect } from "react"
import modules from "./services/modules.js"

import Numbers from "./components/Numbers"
import Header from "./components/Header"
import AddItem from "./components/AddItem"
import Search from "./components/Search"
import Notifications from "./components/Notifications.jsx"

function App() {
    const defaultNotificationState = {
        show: false,
        deleteFlag: false,
        name: "",
        number: "",
    }

    const [person, setPersons] = useState([])

    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    const [notification, setNotification] = useState(defaultNotificationState)

    // const [deleteFlag, setDeleteFlag] = useState(false)

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
        // console.log(event.target.value.toString())
        setSearchTerm(event.target.value.toString())
    }

    function handleName(event) {
        setNewName(event.target.value)
    }

    function addPerson(event) {
        event.preventDefault()
        const trimmedName = newName.trim()

        const existingPerson = person.some(
            (person) =>
                person.name === trimmedName || person.number === newNumber
        )
            ? person.find(
                  (per) => per.name === trimmedName || per.number === newNumber
              )
            : false

        if (existingPerson) return updatePerson(existingPerson, trimmedName)

        const personObject = {
            name: trimmedName,
            number: newNumber,
            id: (Math.max(person.length) + 1).toString(),
        }

        modules.create(personObject).then(() => {
            // console.log(response)
            setPersons([...person, personObject])
            setNewName("")
            setNewNumber("")

            notificationTrigger(personObject)
        })
    }

    function updatePerson(existingPerson, trimmedName) {
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

            return modules.update(updatedValues.id, updatedValues).then(() => {
                // console.log(response)
                setPersons(
                    person.map((p) =>
                        p.id === existingPerson.id ? updatedValues : p
                    )
                )
                setNewName("")
                setNewNumber("")

                notificationTrigger(updatedValues)
            })
        } else return
    }

    function removePerson(id, name, number) {
        if (
            window.confirm(
                `would you like to delete the ${name} with ${number}?`
            )
        ) {
            modules
                .remove(id)
                .then(() => {
                    setPersons((prevPersons) =>
                        prevPersons.filter((p) => p.id !== id)
                    )
                    setNotification({
                        show: true,
                        deleteFlag: true,
                        name: name,
                        number: number,
                    })
                    setTimeout(() => {
                        setNotification(defaultNotificationState)
                    }, 3000)
                })
                .catch((error) => console.log(error))
        }
    }

    function notificationTrigger(personObject) {
        // console.log(personObject)

        setNotification({
            ...notification,
            show: true,
            name: personObject.name,
            number: personObject.number,
        })
        console.log(notification)
        setTimeout(() => {
            setNotification(defaultNotificationState)
        }, 3000)
    }

    const filteredContent = searchTerm
        ? person.filter(
              (ppl) =>
                  ppl.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  ppl.number.includes(searchTerm)
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
            {notification.show && (
                <Notifications
                    displayName={notification.name}
                    displayNumber={notification.number}
                    deleteFlag={notification.deleteFlag}
                />
            )}

            <Header headerName={"Number"} />

            <Numbers person={filteredContent} removePerson={removePerson} />
        </>
    )
}

export default App
