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
    <div className='item_wrapper' key={menuItem.id} >
      <button className='addToCartBtn' onClick={addedToCart}>+</button>
      <article className='item_name'>
        <h2>{menuItem.title}</h2>
        <p className='item_name__info'>{menuItem.desc}</p>
      </article>
      <h2 className='item_price'>{menuItem.price} kr</h2>
    </div>
  )
}

export default MenuItem