import React, { useState } from 'react'

//Components
import Loading from './Loading'
import CountryCard from './CountryCard'
import "./searchForm.css"

const SearchForm = () => {

    const [data, setData] = useState([])
    const [countryName, setCountryName] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchCountryData = () => {

        setLoading(true)
                setTimeout( 
                        async()=> {
                            try {
                                const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
                                const result = await response.json()
                                if (result.status) {
                                    setError(true)
                                    setLoading(false)
                                } else {
                                    setData(result)
                                }
                            } catch (error) {
                            }
                            setLoading(false)
                            },1000)
                            setCountryName("")
                            setError(false)
    }

    return (
        <div className="searchCountryDiv">
            <div className="countryWrapper">
                <h1 className="searchTitle">Countries</h1>
                <p className="searchSubtitle">Please make sure to enter the country name in English</p>
                <div className="inputDiv">
                    <label className="searchLabel">Search by country name (In English)</label>
                    <input type="text" placeholder="eg. Colombia" className={error ? "error" : "searchInput"} onChange={(e)=> {setCountryName(e.target.value)}}/>
                    <button className="searchCountryButton" onClick={fetchCountryData}>Search</button>
                </div>
                {
                    error ? (
                        <p className="errorMessage">Please check the name of the country. You need to write the exact name in English. E.g United Kingdom instead of England.</p>
                    ) : (
                <div className="singleCountryDisplay">
                {
                    loading && (
                        <Loading />
                    )
                }
                {
                    data.map((singleCountry) => {
                        return (
                            <CountryCard 
                                 name={singleCountry.name}
                                flag={singleCountry.flag}
                                area={singleCountry.area}
                            />
                            )
                    })
                }</div>
                    )
                }
            </div>
        </div>
    )
}

export default SearchForm
