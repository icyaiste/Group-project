import './Cart.css';


function Cart() {
  return (
    <section className='cart'>
      <h2 className="cart__title">Din beställning</h2>
      <section className="cart__orderSection">{/* Insert cart items variable */}</section>
      <section className="cart__costContainer">
        <h4 className="costContainer__totalText">Total</h4>
        <p className="costContainer__dots">................</p>
        <h4 className="costContainer__totalPrice">{/* Insert total price variable */} kr</h4>
      </section>
      <p className="cart__costRelatedInfo">inkl moms + drönarleverans</p>
      <button className="cart__orderBtn">Take my money!</button>
    </section>
  )
}

export default Cart
