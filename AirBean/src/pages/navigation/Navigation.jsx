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
        <button onClick={goToMenuPage}>Meny</button>
        <div className='line'></div>
        <button onClick={goToAboutPage}>Vårt kaffe</button>
        <div className='line'></div>
        <button onClick={goToStatusPage}>Orderstatus</button>
        <div className='line'></div>
      </section>
    </main>
  )
}

export default Navigation;