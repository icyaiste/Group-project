import React from 'react'
import './about-styles.css'
import evacortado from "./images/eva-cortado.jpg"
import graphicsheader from "./images/graphics-header.svg"
import navicon from "./images/navicon.svg"
import graphicsfooter from "./images/graphics-footer.svg"
import { Navigate } from 'react-router-dom'

function About() {
const imageClick = () => {
  console.log('clicked')
Navigate ("/navigation");
}

  return (
    <div className='main'>
      <div className='header'>
      <img src={graphicsheader} alt="header image" />
     
        <img src={navicon} alt="navicon image" className='navicon' onClick={imageClick}/>
      
      <h1 className='header_name'>Vårt kaffe</h1>
      </div>
      <br />
      <section className='main_para'>
      <div className='main_para_1'><b>
      Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
      </b>
      </div>
      <br />
      <div className='main_para_2'>
      Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
      </div>
      <br />
      <div>
      Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
      </div>
      <br />
      </section>
      <section className='footer'>
        <img src= {evacortado} alt="Eva Cortado" className='eva' />
        <h2>Eva Cortado</h2>
        <h3>VD & Grundare</h3>
      </section>
      <br />
      <img src= {graphicsfooter} alt="footer image" />
    </div>
  )
}

export default About
