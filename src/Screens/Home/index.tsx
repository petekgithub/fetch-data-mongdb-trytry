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

    const login = () => {
        navigate("/login");
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={login}>Log In</button>
            <button onClick={logout}>Log Out</button>

        </div>
    )
}

export default Home;
