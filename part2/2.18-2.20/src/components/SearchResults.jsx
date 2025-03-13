import axios from "axios"
import { useState, useEffect } from "react"

export default function SearchResults({ results }) {
    console.log(results.length)
    console.log(Array.isArray(results))

    const [countryDetails, setCountryDetails] = useState(null)
    const [loading, setLoading] = useState(false)

    // Use useEffect to fetch data when results changes
    useEffect(() => {
        // Only fetch if we have exactly one result
        if (results && results.length === 1) {
            setLoading(true)
            axios
                .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${results[0].name.common}`)
                .then((response) => {
                    const data = response.data
                    // console.log(data)
                    setCountryDetails(data)
                })
                .catch(error => {
                    console.error("Error fetching country details:", error)
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            // Reset countryDetails if we don't have exactly one result
            setCountryDetails(null)
        }
    }, [results]) // This effect runs whenever results changes

    const countryDetailDisplay = countryDetails && (
        <div>
            <h1>{countryDetails.name.common}</h1>
            <p>Capital: {countryDetails.capital}</p>
            <p>Area: {countryDetails.area}</p>
            <h1>Language</h1>
            <ul>
                {Object.entries(countryDetails.languages).map(
                    ([code, language]) => (
                        <li key={code}>{language}</li>
                    )
                )}
            </ul>
            <br />
            <img src={countryDetails.flags.png} alt={countryDetails.flags.alt} />
        </div>
    )

    const conditionalRendering =
        results && results.length > 10 ? (
            <p>"Too many matches, specify another filter"</p>
        ) : results && results.length > 1 && results.length <= 10 ? (
            results.map((country) => (
                <p key={crypto.randomUUID()}>{country.name.common}</p>
            ))
        ) : results && results.length === 1 ? (
            loading ? <p>Loading country details...</p> : countryDetailDisplay
        ) : (
            <p>Please type a country</p>
        )

    return <>{conditionalRendering}</>
}