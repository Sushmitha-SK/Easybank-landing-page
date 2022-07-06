import React from 'react'
import '../components/FeaturesCard.css'

function FeaturesCard(props) {
    return (
        <div className="card">
            <img src={props.src} style={{
                width: '60px',
                height: '60px'
            }} className="card-img-top mx-2" alt="" />
            <div className="card-body my-2">
                <h5 className="card-title cardHeader">{props.featureTitle}</h5>
                <p className="card-text cardText">{props.featureDescription}</p>
            </div>
        </div>
    )
}

export default FeaturesCard
