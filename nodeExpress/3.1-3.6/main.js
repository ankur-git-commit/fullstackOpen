require('dotenv').config()
const express = require('express')
const app = express()

PORT = process.env.PORT || 3000

phonebook = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>This is the homepage</h1>')
})

// 3.1
app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

// 3.2
app.get('/info', (request, response) => {
    const date = new Date().toString()
    response.send(`<p>Phonebook has info for ${phonebook.length} people<p><p>${date}</p>`)
})

// 3.3
app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = phonebook.find(person => person.id === id)

    const res = person ? response.json(person) : response.status(404).send('Not a valid ID')
    res    
})


// 3.4
app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = phonebook.filter(person => person.id !== id)

    response.json(person)
})

// 3.5
app.listen(PORT, () => {
    console.log(`The server is running at PORT: ${PORT}`)
})