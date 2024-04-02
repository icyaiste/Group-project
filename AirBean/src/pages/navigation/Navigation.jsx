import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';
import close from "./images/close.svg"

function Navigation() {

  const navigate = useNavigate();

  const goToStartPage = () => {
    navigate("/");
  }

  return (
    <main className='mainNav' >
      <button className='closingBtn' onClick={ goToStartPage }>
        <img src={close} alt="close" />
      </button>
      <nav className='mainNav__navigation'>
        <Link to="/menu" className='menuPage'>Meny</Link>
        <hr /><br />
        <Link to="/about" className='aboutPage'>Vårt kaffe</Link>
        <hr /><br />
        <Link to="/status" className='orderStatusPage'>Orderstatus</Link>
        <hr /><br />
      </nav>
    </main>
  )
}

export default Navigation;