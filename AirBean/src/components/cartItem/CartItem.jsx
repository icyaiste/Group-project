import './CartItem.css';

function CartItem(props) {

  const { title, price } = props.data;

  return(
    <article className='order'>
      <section className="order__titleAndDots">
        <h4 className="order__itemName">{ title }</h4>
        <p className="order__dots">.................</p>
      </section>
      
      <p className="order__itemPrice">{ price } kr</p>
    </article>
  );
}

export default CartItem;