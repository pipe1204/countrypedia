import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router'
import "./countryDetail.css"

//Components
import CovidDetail from './CovidDetail'

const CountryDetail = () => {

    const countryData = useParams()
    const [singleCountryDetail, setSingleCountryDetail] = useState([])
    const [load, setLoad] = useState(false)
    const [covidData, setCovidData] = useState([])

    const fetchSingleCountry = async() => {

        const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryData.name}`)
        const results = await response.json()
        setSingleCountryDetail(results[0])
        setLoad(true)
    }

    useEffect(() => {
        fetchSingleCountry()
        setCovidData([])
    },[countryData])


    const fetchCovidData = async() => {

        const response = await fetch(`https://api.covid19api.com/live/country/${singleCountryDetail.name}`)
        const results = await response.json()
        const shortList = results.slice(0, 8)
        console.log(shortList)
        setCovidData(shortList)
        console.log(shortList)
        setLoad(true)
    }

    return (
        <>
        <div className="mainDiv">
            <div className="detailWrapper">
                <Link to="/" className="home"><h2>⬅️ Back Home</h2></Link>
                <div className="detailCard">
                    <article>
                        <header className="headerDetail">
                            <h2 className="headerText">Country: <span>{singleCountryDetail.name}</span></h2>
                            <h2 className="headerText">Capital: <span>{singleCountryDetail.capital}</span></h2>
                        </header>
                        <footer className="footerDetail">
                            <img src={singleCountryDetail.flag} className="countryFlag"/>
                            <h3 className="footerText"><span>Population:</span> {singleCountryDetail.population} million people</h3>
                            <h3 className="footerText"><span>Region:</span> {singleCountryDetail.region}</h3>
                            <h3 className="footerText"><span>Subregion:</span> {singleCountryDetail.subregion}</h3>
                            <div className="borderDiv">
                                <h3><span>Borders</span></h3>
                                <div className="borders">
                                    {
                                        load &&
                                        singleCountryDetail.borders.map((border) => {
                                            return (
                                                <h3 className="borderName">{border}</h3>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <button className="covid" onClick={fetchCovidData}>Covid Information</button>
                        </footer>
                    </article> 
                    <div className="covidCardDiv">
                    {
                    load && 
                        covidData.map((city) => {
                            return (
                                <>
                                    <CovidDetail 
                                        province={city.Province}
                                        confirmed={city.Confirmed}
                                        active={city.Active}
                                        deaths={city.Deaths}
                                    />
                                </>
                            )
                        })
                    }
                </div>   
                </div>
            </div>
        </div>
        </>
    )
}

export default CountryDetail
