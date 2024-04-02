import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import landing from "./images/landing.svg";
import left from "./images/left.svg";
import right from "./images/right.svg"

function Home() {
    const navigate = useNavigate();

    const goToNavigation = () => {
        navigate("/navigation");
    }

    return (
        <main className='main__home' onClick={goToNavigation}>
            <img className='left_svg' src={left} alt="leaves" />
            <img className='logo' src={landing} alt="AirBean logo" />
            <img className='right_svg' src={right} alt="leaves" />
        </main>
    )
}

export default Home
