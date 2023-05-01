import React from "react";
import './FeatureJob.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const FeatureJob = ({job}) => {
    const {id, logo, title, name, type, duration, location, salary} = job
    return (
        <div className="each-job">
            <img src={logo} alt="" />
            <h4>{title}</h4>
            <p className="title">{name}</p>
            <div className="first">
                <p className="type">{type}</p>
                <p className="time">{duration}</p>
            </div>
            <div className="two">
                <p><FontAwesomeIcon icon={faLocationPin} /> {location}</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}</p>
            </div>
            <Link to={`/feature/${id}`}><button className="btn-details">View Details</button></Link>
        </div>
    );
};

export default FeatureJob;