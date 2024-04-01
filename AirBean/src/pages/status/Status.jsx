import { useEffect, useState } from 'react';
import './style/status.css'
import drone from './images/drone.svg'
import { useDispatch, useSelector } from 'react-redux';
// import { readOrder } from '../../reducers/orderReducer';


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
    navigate("/navigation");
  }

  return (
    <main className='main'>
      <section className='main__container'>
        <p>Ordernummer #<span className='fatText'>{orderData.orderNr}</span></p>
        <br />
        <br />
        <img src={drone} alt="drone" /><br />
        <br />
        {orderData === 'Ingen aktiv beställning finns' || !timeLeft ?
          <p>Ingen aktiv beställning finns</p> :
          (<article>
            <h1 className='status_text'>Din beställning är på väg!</h1>
            <br />
            <p><span className='eta'>{timeLeft}</span> minuter</p>
          </article>)
        }
      </section>
      <button className='cool__btn' onClick={goToNavPage}>Ok, cool!</button>
    </main>
  )
}

export default Status;