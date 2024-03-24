import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './Navigation.css';

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
      <main>
        <nav>
          <img src="#" alt="closing button" />
        </nav>
        <h1 onClick={goToMenuPage}>Meny</h1>
        <h1 onClick={goToAboutPage}>Vårt kaffe</h1>
        <h1 onClick={goToStatusPage}>Orderstatus</h1>
      </main>
    )
  }

  export default Navigation;