import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./home.css";
import landing from "./images/landing.svg";
import left from "./images/left.svg";
import right from "./images/right.svg"

function Home() {
    const navigate = useNavigate();

    const goToNavigation = () => {
        navigate("/navigation");
    }

    return (
        <main onClick={goToNavigation}>
            <section className='main_home'>
                <img className='left_svg' src={left} alt="leaves" />
                <img className='logo' src={landing} alt="AirBean logo" />
                <img className='right_svg' src={right} alt="leaves" />
            </section>
        </main>
    )
}

export default Home
