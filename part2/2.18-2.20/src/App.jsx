/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import axios from "axios"

import Search from "./components/Search"
import SearchResults from "./components/SearchResults"

function App() {
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axios
            .get("https://studies.cs.helsinki.fi/restcountries/api/all")
            .then((response) => {
                // console.log(response)
                const data = response.data
                // console.log(data)
                setCountries(data)
                // console.log(countries)
            })
    }, [])

    function handleSearch(event) {
        setSearchTerm(event.target.value)
    }

    const filterSearch = searchTerm
        ? countries.filter((country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
        : ""

    // console.log(countries)
    // console.log(filterSearch)

    return (
        <div>
            <ul>
                <Search searchTerm={searchTerm} handleSearch={handleSearch} />
                <SearchResults results={filterSearch} />
            </ul>
        </div>
    )
}

export default App
