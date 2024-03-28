import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styling/navigation.css';
import close from "./images/close.svg"

function Navigation() {

  const navigate = useNavigate();

  const goToStartPage = () => {
    navigate("/");
  }

  return (
    <main className='main_nav' >
      <button className='closingBtn' onClick={ goToStartPage }>
        <img src={close} alt="closing button" />
      </button>
      <section className='content'>
        <Link to="/menu" className='page_1'>Meny</Link>
        <hr /><br />
        <Link to="/about" className='page_2'>Vårt kaffe</Link>
        <hr /><br />
        <Link to="/status" className='page_3'>Orderstatus</Link>
        <hr /><br />
      </section>
    </main>
  )
}

export default Navigation;