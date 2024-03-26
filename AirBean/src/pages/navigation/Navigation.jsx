import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styling/navigation.css';

function Navigation() {

  const navigate = useNavigate();

  const goToMenuPage = () => {
    navigate("/menu");
  }

  const goToAboutPage = () => {
    navigate("/about");
  }

  const goToStatusPage = () => {
    navigate("/status");
  }

  return (
    <main className='content'>
      <nav className='closingBtn'>
        <img src="#" alt="closing button" />
      </nav>
      <section>
        <h1 onClick={goToMenuPage}>Meny</h1>
        <div className='line'></div>
        <h1 onClick={goToAboutPage}>Vårt kaffe</h1>
        <div className='line'></div>
        <h1 onClick={goToStatusPage}>Orderstatus</h1>
        <div className='line'></div>
      </section>
    </main>
  )
}

export default Navigation;