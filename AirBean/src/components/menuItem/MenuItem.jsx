import React from 'react'


//send props to MenuItem from Menu
function MenuItem(props) {
 const {menuItem} = props;

  return ( 
    <div key={menuItem.id} >
      <button>plus Button</button>
      <article>
        <h2>menuItem.title</h2>
        <p>menuItem.price</p>
      </article>
      <p>menuItem.desc</p>
    </div>
  )
}

export default MenuItem