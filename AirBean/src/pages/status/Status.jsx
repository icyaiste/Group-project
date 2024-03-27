import React from 'react'
import { useEffect, useState } from "react";
import './style/status.css'
import drone from './images/drone.svg'

function Status() {
  const [status, setStatus] = useState([]);

    useEffect(() => {
        async function getStatus() {
            const response = await fetch('https://airbean-9pcyw.ondigitalocean.app/api/beans');
            const data = await response.json();
            console.log(data);
            setStatus(data);
        }

        getStatus();
    }, []);
  return (
    <div className='main'>
      <div className='img_para'>
      <h4>Ordernummer</h4>
      <br />
      <img src={drone} alt="drone" /><br />
      <h1>Din beställning <br /> är på väg!</h1><br />
      <h4>minuter</h4>
      </div>
      <button className='btn'>Ok, cool!</button>
    </div>
  )
}

export default Status
