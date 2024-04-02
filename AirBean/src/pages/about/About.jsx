import React from 'react'
import './About.css'
import evacortado from "./images/eva-cortado.jpg"
import graphicsheader from "./images/graphics-header.svg"
import navicon from "./images/navicon.svg"
import graphicsfooter from "./images/graphics-footer.svg"
import { useNavigate } from 'react-router-dom'


function About() {

 const navigate = useNavigate();
  const goToNavPage = () => {
    navigate("/navigation");
  }

  return (
    <div className='main__about'>
      <header className='header'>
        <img src={graphicsheader} alt="header image" />
        <button className="header__navBtn" onClick={goToNavPage}><img src={navicon} className='navicon' alt="navicon image"/></button>
      </header>
      <br />
      <section className='main__para'>
        <h2 className='main__para__title'>Vårt kaffe</h2>
        <p className='main__para__1'>
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
        </p>
        <br />
        <p className='main__para__2'>
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
        </p>
        <br />
        <p>
          Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
        </p>
        <br />
      </section>
      <footer className='footer'>
        <img className='eva' src={evacortado} alt="Eva Cortado" />
        <h2>Eva Cortado</h2>
        <h3>VD & Grundare</h3>
        <img src={graphicsfooter} alt="footer image" />
      </footer>     
    </div>
  )
}

export default About;
