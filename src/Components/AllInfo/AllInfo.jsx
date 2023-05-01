import React, { useEffect, useState } from "react";
import './AllInfo.css';
import CategoryList from "../CategoryList/CategoryList";
import FeatureJob from "../FeatureJob/FeatureJob";
import { useLoaderData } from "react-router-dom";

const AllInfo = () => {
    const [lists, setList] = useState([]);
    useEffect(() => {
        fetch('Category.json')
        .then(res => res.json())
        .then(data => setList(data))
    },[])
    // const [jobs, setJobs] = useState([4]);
    // useEffect(() => {
    //     fetch('Feature.json')
    //     .then(res => res.json())
    //     .then(data => setJobs(data))
    // },[])
    const jobs = useLoaderData();
    return (
        <div>
            <div className="banner">
                <div>
                    <h1 className="bold-head">One Step Closer To Your  <span className="bold-diff">Dream Job</span></h1>
                    <p className="paragraph">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn-start">Get Started</button>
                </div>
                <img src="./assets/All Images/P3OLGJ1 copy 1.png" alt="" />
            </div>
            <div className="category-part">
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="cards">
                {
                    lists.map(list => <CategoryList
                    key={list.id}
                    list={list}></CategoryList>)
                }
            </div>
            <div className="feature-part">
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="jobs">
                {
                    jobs.map(job =><FeatureJob
                    key={job.id}
                    job={job}></FeatureJob>)
                }
            </div>
            <button className="btn-seeAll">See All Jobs</button>
        </div>
    );
};

export default AllInfo;