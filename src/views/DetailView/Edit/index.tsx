import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Edit = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);


    const changeData = async () => {
        const res = await axios.post(
            `http://localhost:5000/organisations/id', {data: {id: null}})`);
            setPosts(res.data);
            setLoading(false);
    };

    useEffect(() => {
        changeData();
    }, []);


    {/* !! add to value={data.name}*/}

    return (
        <div>
            <h2>Update</h2>
            <p>
                <label>Name: <input type="text" name="Name" onChange={changeData}>
                </input>
                </label>
            </p>
            <p>
                 <label>Name: <input type="text" name="EIN"  onChange={changeData}>  
                </input>
                </label>
            </p>
            <p>
                <label>Name: <input type="text" name="Description" onChange={changeData}>
                </input>
                </label>
            </p>
            <p>
                <label>Name: <input type="text" name="Mission" onChange={changeData}>
                </input>
                </label>
            </p>
            <p>
                <label>Name: <input type="text" name="ZIP" onChange={changeData}>
                </input>
                </label>
            </p>
            <p>
                <label>Name: <input type="text" name="State" onChange={changeData}>
                </input>
                </label>
            </p>
            <p>
                <label>Name: <input type="text" name="City" onChange={changeData}>
                </input>
                </label>
            </p>
            <p>
                <label>Name: <input type="text" name="Street" onChange={changeData}>
                </input>
                </label>
            </p>
            <p>
                <label>Name: <input type="text" name="Amount" onChange={changeData}>
                </input>
                </label>
            </p>
            <p>
                <label>Name: <input type="text" name="Website" onChange={changeData}>
                </input>
                </label>
            </p>
            <p>
                <label>Name: <input type="text" name="Phone" onChange={changeData}>
                </input>
                </label>
            </p>
        </div>
    )
}

export default Edit;
