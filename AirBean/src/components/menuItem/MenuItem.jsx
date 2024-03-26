import React from 'react';
import { useState } from 'react';
import { AddToCart } from '../../reducers/Reducer';
import { useDispatch } from 'react-redux';


function MenuItem(props) {
  const { menuItem } = props;

  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState([]);


  const addToCart = () => {
    dispatch(AddToCart(menuItem))
  }

  return (
    <div key={menuItem.id} >
      <button className='addToCartBtn' onClick={addToCart}>Add</button>
      <article>
        <h2>{menuItem.title}</h2>
        <p>{menuItem.price}</p>
      </article>
      <p>{menuItem.desc}</p>
    </div>
  )
}

export default MenuItem