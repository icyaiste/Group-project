import React from 'react';
import { useEffect, useState } from 'react';
import MenuItem from '../../components/menuItem/MenuItem';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import bag from '../../assets/graphics/bag.svg';
import navicon from '../../assets/graphics/navicon.svg';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  const navigate = useNavigate();

  async function fetchMenuItems() {
    try {
      const response = await fetch('https://airbean-9pcyw.ondigitalocean.app/api/beans')
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
      //console.log(menuItem);

      return (
        <article key={menuItem.id}>
          <MenuItem menuItem={menuItem} />
        </article>
      )
    })
  }

  const goToNavPage = () => {
    navigate("/navigation");
  }

  const goToCartPage = () => {
    navigate("/cart");
  }

  return (
    <section className='menuSection'>
      <header className="menuSection__header">
        <button className="header__navBtn" onClick={ goToNavPage }><img src={ navicon } alt="Nav" /></button>
        <button className="header__cartBtn" onClick={ goToCartPage }><img src={ bag } alt="Cart" /></button>       
      </header>
      <h1>Menu</h1>
      <div>{displayMenuItems()}</div>
      <footer className='menuSection__footer'></footer>
    </section>
  )
}

export default Menu