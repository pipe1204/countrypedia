import React, { useState } from "react"
import "./countries.css"

//Components
import CountryCard from "./CountryCard"
import Loading from "./Loading"



const Countries = () => {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        setTimeout( async() => {
        const response = await fetch("https://restcountries.eu/rest/v2/all")
        const results = await response.json()
        setCountries(results)
        setLoading(false)
    }, 1000)
}

    const setClearItems = () => {
        setCountries([])
    }

    return (
            <div className="mainDiv">
                <div className="divButton">
                    <button className="displayAll" onClick={fetchData}>Show All</button> 
                    <button className="clearAll" onClick={setClearItems}>Clear</button> 
                </div>  
                <div className="allCountriesDiv">
        {
            loading && (
                <Loading />
            )
        }
            {
                countries.map((country) => {
                    const {name, flag, area} = country

                    return (
                    <CountryCard 
                        name={name}
                        flag={flag}
                        area={area}
                    />
                    )
                })
            }
        </div> 
            </div>
    )
}

export default Countries
