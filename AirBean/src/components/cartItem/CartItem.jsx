import './CartItem.css';

function CartItem() {
  return(
    <article className='order'>
      <h4 className="order__itemName">{/* Insert article name */}</h4>
      <p className="order__itemPrice">{/* Insert item price */} kr</p>
    </article>
  );
}

export default CartItem;