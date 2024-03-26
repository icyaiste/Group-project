import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';

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
  
      <i class="fa-thin fa-circle-xmark" style="color: #f4f3f1;"></i>
      
      <section className='pages'>
        <h1 onClick={goToMenuPage}>Meny</h1>
      <hr />
        <h1 onClick={goToAboutPage}>Vårt kaffe</h1>
        <hr />
        <h1 onClick={goToStatusPage}>Orderstatus</h1>
    <hr />
      </section>
    </main>
  )
}

export default Navigation;
