import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styling/navigation.css';
import close from "./images/close.svg"

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
    <main >
      <nav className='closingBtn'>
        <img src={close} alt="closing button" />
      </nav>
      <section className='content'>
        <p onClick={goToMenuPage} className='page_1'>Meny</p>
        <hr /><br />
        <p onClick={goToAboutPage} className='page_2'>Vårt kaffe</p>
        <hr /><br />
        <p onClick={goToStatusPage} className='page_3'>Orderstatus</p>
        <hr /><br />
      </section>
    </main>
  )
}

export default Navigation;