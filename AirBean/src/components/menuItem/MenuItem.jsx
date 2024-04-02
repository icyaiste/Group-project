import React from 'react';
import { addToCart } from '../../reducers/orderReducer';
import { useDispatch } from 'react-redux';
import './MenuItem.css';
import add from '../../assets/graphics/add.svg';

function MenuItem(props) {
  const { menuItem } = props;

  const dispatch = useDispatch();

  const addedToCart = () => {
    dispatch(addToCart(menuItem))
  }

  return (
    <article className='menu__item' key={menuItem.id} >
      <section className='item__btnAndInfo'>
        <button className='addToCartBtn' onClick={addedToCart}><img src={ add } alt="Add" srcset="" /></button>
        <article className='item__name__info'>
          <h2 className='item__name'>{menuItem.title}</h2>
          <p className='item__info'>{menuItem.desc}</p>
        </article>
      </section>
      <h2 className='item__price'>{menuItem.price}&nbsp;kr</h2>
    </article>
  )
}

export default MenuItem