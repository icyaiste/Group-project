import './CartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../reducers/orderReducer';

function CartItem(props) {

  const { title, price, id } = props.data;

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const handleRemoveItem = () => {
    const itemIndex = cartItems.findIndex(obj => obj.id === id);
    const filteredArr = cartItems.filter((_, index) => {
      return index !== itemIndex;
    });
    console.log(filteredArr);
    dispatch(removeFromCart(filteredArr));
    console.log('Item removed');
  }

  return(
    <article className='order'>
      <section className="order__titleDotsAndBtn">
        <h4 className="titleDotsAndBtn__itemName">{ title }</h4>
        <p className="titleDotsAndBtn__dots">.................</p>
        <button className="titleDotsAndBtn__removeBtn" onClick={ handleRemoveItem }>X</button>
      </section>
      
      <p className="order__itemPrice">{ price } kr</p>
      
    </article>
  );
}

export default CartItem;