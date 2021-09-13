import React from 'react'
import { Link } from "react-router-dom"
import "./countryCard.css"

const CountryCard = ({ name, flag, area }) => {
    return (
            <div className="cardDvi" key={area}>
                <h3 className="countryName">{name}</h3>
                <img className="countryFlag" src={flag} alt={name}/>
                <Link className="more" to={`/details/${name}`}><p>See more...</p></Link>
            </div>
    )
}

export default CountryCard
