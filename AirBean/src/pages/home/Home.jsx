import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

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
        </main>
    )
}

export default Home