import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style/home.css';

function Home() {
    const navigate = useNavigate();

    const goToNavigation = () => {
        navigate("/navigation");
    }

    return (
        <main onClick={goToNavigation}>
            <img src="" alt="AirBean logo" />
            <h1>Air Bean</h1>
            <p>Dronedelivered coffee</p>
            <Link to="/navigation">To Navigation</Link>
        </main>
    )
}

export default Home
