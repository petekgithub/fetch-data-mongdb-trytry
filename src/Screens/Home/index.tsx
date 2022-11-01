import React from 'react';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const signOut = useSignOut();
    const navigate = useNavigate();

    const logout = () => {
        signOut();
        navigate("/login");
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;
