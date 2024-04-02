import './CartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../reducers/orderReducer';
import close from '../../assets/graphics/close.svg';

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
    <article className='orderItem'>
      <section className="orderItem__titleDotsAndBtn">
        <h4 className="titleDotsAndBtn__itemName">{ title }</h4>
        <p className="titleDotsAndBtn__dots">
          .........................................................................................................................................................................................................................................................................................................................................................................................
        </p>
        <div className='btnContainer'>
          <button className="titleDotsAndBtn__removeBtn" onClick={ handleRemoveItem }><img src={ close } alt="" srcset="" /></button>
        </div>
      </section>
      
      <p className="orderItem__itemPrice">{ price } kr</p>
      
    </article>
  );
}

export default CartItem;