import './Cart.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, resetCart } from '../../reducers/orderReducer';
import CartItem from '../../components/cartItem/CartItem';

import {saveToLocalStorage} from '../../store/store';

function Cart() {

  const [price, setPrice] = useState(0);
  
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  useEffect(() => {
    calcPrice();
  }, [cartItems]);

  const dispatch = useDispatch()

  const handleRegisterOrder = () => {
    /* dispatch(addToCart({title: 'charlie', job: 'artist', price: 10})); */
    registerOrder();
  }

  async function registerOrder() {
    try {
      const filteredObjArr = cartItems.map((obj) => ({
        name: obj.title,
        price: obj.price
      }));
      console.log(filteredObjArr);
      const response = await fetch('https://airbean-9pcyw.ondigitalocean.app/api/beans/order', {
      method: "POST",
      body: JSON.stringify({
        "details": {
          "order": filteredObjArr
        }
      }), 
      headers: {
        'Content-Type': 'application/json' 
        }
      });
      const data = await response.json();
      console.log(data);
       dispatch(saveToLocalStorage(data));
      dispatch(resetCart([]));
    } catch (error) {
      console.log(error);
    }
  }

  let items = [];

  if(cartItems){
    items = cartItems.map((obj, index) => {
      return <CartItem key={index} data={obj}/>
    });
  }
 
  function calcPrice() {
    let sum = 0;
    for(const item of cartItems){
      sum += item.price
    }
    setPrice(parseFloat(sum));
  } 

  return (
    <section className='cart'>
      <h2 className="cart__title">Din&nbsp;beställning</h2>
      <section className="cart__orderSection">{ items }</section>
      <section className="cart__costContainer">
        <h4 className="costContainer__totalText">Total</h4>
        <p className="costContainer__dots">................</p>
        <h4 className="costContainer__totalPrice">{ price } kr</h4>
      </section>
      <p className="cart__costRelatedInfo">inkl&nbsp;moms&nbsp;+&nbsp;drönarleverans</p>
      <button className="cart__orderBtn" onClick={ handleRegisterOrder }>Take my money!</button>
    </section>
  )
}

export default Cart;
