import React, { useEffect, useState } from "react";
import './AppliedJobs.css';
import { getShoppingCart } from "../../utilities/fakedb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const AppliedJobs = () => {
    const [apps, setApp] = useState([]);
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('/Feature.json')
        .then(res => res.json())
        .then(data => setApp(data))
    },[])
    useEffect(() => {
        const jobList = getShoppingCart();
        const totalSaved = [];
        for(const id in jobList){
            const savedJob = apps.find(app => app.id === id)
            if(savedJob){
                console.log(savedJob);
                totalSaved.push(savedJob)
            }
        }
        setJobs(totalSaved);
    },[apps])
    return (
        <div>
            <div className="job-summary">
                <h2>Applied Jobs</h2>
                <img className="img1" src="../assets/All Images/Vector.png" alt="" />
                <img className="img2" src="../assets/All Images/Vector-1.png" alt="" />
            </div>
            {
                jobs.map(job => <div className="apply" key={job.id}>
                    <img src={job.logo} alt="" />
                    <div>
                        <h4>{job.title}</h4>
                        <p className="title">{job.name}</p>
                        <div className="first">
                            <p className="type">{job.type}</p>
                            <p className="time">{job.duration}</p>
                         </div>
                         <div className="two">
                            <p><FontAwesomeIcon icon={faLocationPin} /> {job.location}</p>
                            <p><FontAwesomeIcon icon={faDollarSign} /> Salary: {job.salary}</p>
                        </div>
                    </div>
                    <Link to={`/feature/${job.id}`}><button className="btn-details">View Details</button></Link>
                </div>)
            }
        </div>
    );
};

export default AppliedJobs;