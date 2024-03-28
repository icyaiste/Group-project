import React from 'react';
import { addToCart } from '../../reducers/orderReducer';
import { useDispatch } from 'react-redux';
import './MenuItem.css';

function MenuItem(props) {
  const { menuItem } = props;

  const dispatch = useDispatch();

  const addedToCart = () => {
    dispatch(addToCart(menuItem))
  }

  return (
    <div key={menuItem.id} >
      <article>
        <h2>{menuItem.title}</h2>
        <p>{menuItem.price} kr</p>
      </article>
      <p>{menuItem.desc}</p>
      <button className='addToCartBtn' onClick={addedToCart}>+</button>
    </div>
  )
}

export default MenuItem