import React from 'react'
import { useLocation } from 'react-router-dom';

function Cart() {
  const location = useLocation();
  const menuItem = location.state.menuItem;
  console.log(menuItem);

  return (
    <div>
      
    </div>
  )
}

export default Cart
