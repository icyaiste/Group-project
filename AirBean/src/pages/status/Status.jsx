import { useEffect, useState } from 'react';
import './Status.css'
import drone from './images/drone.svg'
import { useDispatch, useSelector } from 'react-redux';


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
    timeLeft > 0 ? navigate("/navigation") : navigate("/menu");
  }

  return (
    <main className='main'>
      <section className='mainContainer'>
        <p className='mainContainer__orderNr'>Ordernummer #<span className='fatText'>{orderData.orderNr}</span></p>
        <br />
        <br />
        <img src={drone} alt="drone" /><br />
        <br />
        {orderData === 'Ingen aktiv beställning finns' || !timeLeft ?
          (<article className='deliveryInfoContainer'>
          <p className='status__text'>Ingen aktiv beställning finns</p>
          </article>) :
          (<article className='deliveryInfoContainer'>
            <h1 className='status__text'>Din beställning är på väg!</h1>
            <br />
            <p className='deliveryInfoContainer__timeLeft'><span className='eta'>{timeLeft}</span> minuter</p>
          </article>)
        }
      </section>
      <button className='cool__btn' onClick={goToNavPage}>Ok, cool!</button>
    </main>
  )
}

export default Status;