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
            
             <img src={left} alt="" />
             <img src= {landing}  alt="AirBean logo" className='logo'/>
             <img src={right} alt="" />

            </section>
        </main>
    )
}

export default Home
