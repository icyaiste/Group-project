import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main>
            <img src="" alt="AirBean logo" />
            <h1>Air Bean</h1>
            <p>Dronedelivered coffee</p>
            <Link to="/navigation">To Navigation</Link>
        </main>
    )
}

export default Home;
