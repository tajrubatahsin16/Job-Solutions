import React from "react";
import './CategoryList.css';
const CategoryList = ({list}) => {
    const {category_logo, cat_name, jobs_available} = list;
    return (
        <div>
            <div className="each-card">
                <img src={category_logo} alt="" />
                <h4>{cat_name}</h4>
                <p>{jobs_available}</p>
            </div>
        </div>
    );
};
export default CategoryList;