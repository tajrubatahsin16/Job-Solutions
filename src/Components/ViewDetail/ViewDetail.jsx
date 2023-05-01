import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import './ViewDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk, faLocation, faDollar, faPager } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from "../../utilities/fakedb";

const ViewDetail = () => {
    const job = useLoaderData();
    //console.log(job);
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    useEffect(() => {
        const jobData = job.find(feature => feature.id == id);
        setDetail(jobData);
    },[])
    return (
        <div>
            <div className="job-summary">
                <h2>Job Details</h2>
                <img className="img1" src="../assets/All Images/Vector.png" alt="" />
                <img className="img2" src="../assets/All Images/Vector-1.png" alt="" />
            </div>
            <div className="detail-part">
                <div className="left">
                    <p><span className="diff-title">Job Description:</span> {detail.description}</p>
                    <p><span className="diff-title">Job Responsibility:</span> {detail.responsibility}</p>
                    <h4>Educational Requirements:</h4>
                    <p>{detail.ERequirements}</p>
                    <h4>Experiences:</h4>
                    <p>{detail.experiences}</p>
                </div>
                <div className="right">
                    <div className="right-box">
                        <h4>Job Details</h4>
                        <hr />
                        <p><FontAwesomeIcon icon={faDollar} /> Salary: {detail.salary} (Per Month)</p>
                        <p><FontAwesomeIcon icon={faPager} /> Job Title: {detail.title}</p>
                        <h4>Contact Information</h4>
                        <hr />
                        <p><FontAwesomeIcon icon={faPhone} /> Phone: {detail.phone}</p>
                        <p><FontAwesomeIcon icon={faMailBulk} /> Email: {detail.email}</p>
                        <p><FontAwesomeIcon icon={faLocation} /> Address: {detail.address}</p>
                    </div>
                    <Link to="/"><button onClick={() => addToDb(detail.id)} className="btn-apply">Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;