import React from 'react';
import { useState } from 'react';
import { addToCart } from '../../reducers/orderReducer';
import { useDispatch } from 'react-redux';


function MenuItem(props) {
  const { menuItem } = props;

  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState([]);


  const addedToCart = () => {
    dispatch(addToCart(menuItem))
  }

  return (
    <div key={menuItem.id} >
      <button className='addToCartBtn' onClick={addedToCart}>Add</button>
      <article>
        <h2>{menuItem.title}</h2>
        <p>{menuItem.price}</p>
      </article>
      <p>{menuItem.desc}</p>
    </div>
  )
}

export default MenuItem