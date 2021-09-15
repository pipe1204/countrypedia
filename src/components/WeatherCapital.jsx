import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import "./weeatherCapital.css"
    

const WeatherCapital = () => {

    const capital = useParams()
    const apiKey = "b8d4be1420fcaa09cdb97626256ea831"

    const [weatherData, setWeatherData] = useState()
    const [loaded, setLoaded] = useState(false)
    const [wind, setWind] = useState([])
    const [weather, setWeather] = useState([])
    const [error, setError] = useState(false)


    const fetchWeatherData = async() => {

        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${capital.capital}&appid=${apiKey}`)
            const results = await response.json()

            if (results.status) {
                setError(true)
            } else {
                setWeatherData(results)
                setWind(results.wind)
                setWeather(results.weather)
                setLoaded(true)
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        fetchWeatherData()
    },[])

    console.log(weather)
    return (
        <div className="mainDiv">
            <div className="weatherWrapper">
            <Link to="/" className="home"><h2>⬅️ Back Home</h2></Link>
            {
                error ? <h1>NotFound</h1> :          
                    loaded && 
                    <div className="weatherCard">
                        <h3 className="weatherTitle"><span>City:</span> {weatherData.name}</h3>
                        <h3 className="weatherTitle"><span>Currently:</span> {weather[0].main}</h3>
                        <h3 className="weatherTitle"><span>Description:</span> {weather[0].description}</h3>
                        <h3 className="weatherTitle"><span>Speed:</span> {wind.speed}</h3>
                        <h3 className="weatherTitle"><span>Deg:</span> {wind.deg}</h3>
                        <img className="weatherImage" src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={wind.description}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default WeatherCapital
