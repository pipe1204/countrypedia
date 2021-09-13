import React from 'react'
import "./covidDetail.css"

const CovidDetail = ({province, confirmed, active, deaths}) => {

    return (
            <div className="covidCard">
                <div className="dataHeaderCovid">
                    <div className="dataDiv">
                        <h4 className="province">Province: {province}</h4>
                    </div>
                </div>
                <div className="dataFooterCovid">
                    <div className="dataDiv">
                        <h4 className="infoHeading">Confirmed</h4>
                        <h4 className="dataHeading">{confirmed}</h4>
                    </div>
                    <div className="dataDiv">
                        <h4 className="infoHeading">Active</h4>
                        <h4 className="dataHeading">{active}</h4>
                    </div>
                    <div className="dataDiv">
                        <h4 className="infoHeading">Deaths</h4>
                        <h4 className="dataHeading">{deaths}</h4>
                    </div>
                </div>
                
            </div>
    )
}

export default CovidDetail
