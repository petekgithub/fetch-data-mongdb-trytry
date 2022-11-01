import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Pagination = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // page1 to begin with
    const [postsPerPage, setPostsPerPage] = useState(10); // per page

    // useEffect runs when the component mounts and runs whenever updates, adding dependency array/empty brackets for prevent endless loop (now only run when mounts)
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);  // process on fetching
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    console.log(posts);

     
    return (
        <div>
            <h1>Pagination</h1>
        </div>
    )
}

export default Pagination;
