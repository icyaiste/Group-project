import React from 'react';
import { useEffect, useState } from 'react';
import MenuItem from '../../components/menuItem/MenuItem';
import { Link } from 'react-router-dom';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  async function fetchMenuItems() {
    try {
      const response = await fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans')
      const data = await response.json();
      setMenuItems(data.menu);
    } catch (error) {
      console.error('Error has occured', error);
    }
  }
  useEffect(() => {
    fetchMenuItems();
  }, []);


  function displayMenuItems() {
    return menuItems && menuItems.map((menuItem) => {
      console.log(menuItem);

      return (
        <div >
          {MenuItem}
        </div>
      )
    })
  }



  return (
    <section>
      <header>
        <img src="" alt="AirBean logo" />
        <img src="" alt="CartLogo" />
      </header>
      <h1>Menu</h1>
      <div>{displayMenuItems()}</div>
      <Link to="/cart">Cart</Link>
    </section>
  )
}

export default Menu