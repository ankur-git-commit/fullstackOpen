import axios from 'axios'
const url = "http://localhost:3001/persons"


// const getPerson = () => {
//     return axios.get(url)
// }
const getPerson = () => {
    return axios.get(url).then(response => {
        return response.data
    })
}

const create = (personObject) => {
    return axios.post(url, personObject).then(response => {
        return response.data
    })
}

const update = (id, personObject) => {
    return axios.put(`${url}/${id}`, personObject).then(response => {
        return response.data
    })
}

const remove = (id) => {
    return axios.delete(`${url}/${id}`)
}


export default { getPerson, create, remove, update} 

