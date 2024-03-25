import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useState } from 'react';

function MenuItem(props) {
  const { menuItem } = props;

  // const [cartItems, setCartItems] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  // const addTooCart = () => {
  //   setCartItems(prevItems => [...prevItems, item]); // takes the previous state (prevItems) as its argument and returns a new state. New state is [...prevItems, item] )
  //   console.log(cartItems);
  // }


  //onClick={() => addToCart(menuItem)}>Add</button>
  return (
    <div key={menuItem.id} >
      <button className='addToCartBtn' onClick={() => navigate('/cart' , {state: {menuItem}})}>Add</button>
      <article>
        <h2>{menuItem.title}</h2>
        <p>{menuItem.price}</p>
      </article>
      <p>{menuItem.desc}</p>
    </div>
  )
}

export default MenuItem