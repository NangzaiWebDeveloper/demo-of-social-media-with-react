import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmarks, handleAddToReadTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, []) 

    return (
        <div className="md:w-2/3">
            {/* <h1 className="text-2xl font-semibold">Blogs : {blogs.length}</h1> */}
            {
                blogs.map(get => <Blog 
                        key={get.id}
                        handleAddToBookmarks = {handleAddToBookmarks}
                        handleAddToReadTime={handleAddToReadTime}
                        blog={get}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleAddToReadTime: PropTypes.func
}

export default Blogs;