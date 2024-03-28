import React from 'react'
import { useEffect, useState } from "react";
import './style/status.css'
import drone from './images/drone.svg'
import { useDispatch, useSelector } from 'react-redux';
import { readOrder } from '../../reducers/orderReducer';


function Status() {
  const saveData = () => {
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();
  
    useEffect(() => {
      // Simulating data fetching
      const fetchedUserData = { orderNr: '', eta: '' };
      dispatch(setUserData(fetchedUserData));
    }, [dispatch]);
  
  }
  return (
    <div className='main'>
      <div className='img_para'>
      <h4>Ordernummer {data.orderNr}</h4>
      <br />
      <img src={drone} alt="drone" /><br />
      <h1>Din beställning <br /> är på väg!</h1><br />
      <h4>minuter {data.eta}</h4>
      </div>
      <button className='btn'>Ok, cool!</button>
    </div>
  )
}

export default Status
