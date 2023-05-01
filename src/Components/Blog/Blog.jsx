import React from "react";
import './Blog.css';

 const Blog = () => {
    return (
        <div className="blog">
            <h1>Welcome To Blogs To Enrich Your Knowledge!</h1>
            <div className="grids">
                <div className="each-blog">
                    <h2>a. When should you use context API?</h2>
                    <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
                </div>
                <div className="each-blog">
                    <h2>b. What is a custom hook?</h2>
                    <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks . </p>
                </div>
                <div className="each-blog">
                    <h2>c. What is useRef?</h2>
                    <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
                </div>
                <div className="each-blog">
                    <h2>d. What is useMemo?</h2>
                    <p>useMemo() is a function that returns a memoized value of a passed in resource-intensive function . It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
                </div>
            </div>
        </div>
    );
 };

 export default Blog;