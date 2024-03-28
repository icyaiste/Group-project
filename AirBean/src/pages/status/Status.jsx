import { useEffect, useState } from 'react';
import './Status.css'
import drone from './images/drone.svg'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Status() {

  const [timeLeft, setTimeLeft] = useState();

  const orderData = useSelector((state) => state.orders);
  console.log(orderData);

  useEffect(() => {
    getOrder()
  }, [orderData]);

  const navigate = useNavigate();

  async function getOrder() {
    try {
      const response = await fetch(`https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/${orderData.orderNr}`, {
      method: "GET",
      body: JSON.stringify(), 
      headers: {
        'Content-Type': 'application/json' 
        }
      });
      const data = await response.json();
      console.log(data);
      setTimeLeft(data.eta);
    } catch (error) {
      console.log(error);
    }
  }


  const goToNavPage = () => {
    navigate("/navigation");
  }
  
  return (
    <main className='main'>
      <section className='img_para'>
      <h4>Ordernummer { orderData.orderNr }</h4>
      <br />
      <img src={drone} alt="drone" /><br />
      <br />
      { orderData === 'Ingen aktiv beställning finns' ? 
      'Ingen aktiv beställning finns' : (
      <article>
        <h1>Din beställning är på väg!</h1>
        <br />
        <h4>Förväntad leverans om:</h4>
        <h4>{ timeLeft } minuter</h4>
      </article>)
      }
      </section>
      <button className='cool__btn' onClick={ goToNavPage }>Ok, cool!</button>
    </main>
  )
}

export default Status;
