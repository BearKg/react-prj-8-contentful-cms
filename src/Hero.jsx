import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Put a bird on it edison bulb kale chips banjo vibecession,
            single-origin coffee tote bag big mood you probably haven't heard of
            them gastropub. Locavore pabst kickstarter actually selvage raw
            denim kale chips coloring book ugh XOXO adaptogen tilde tbh paleo
            irony. Crucifix food truck brunch thundercats vexillologist air
            plant. Organic la croix mumblecore jean shorts vice hashtag jawn
            neutra snackwave sriracha vegan pop-up big mood food truck salvia.
          </p>
        </div>
        <div className='img-container'>
            <img src={heroImg} alt="woman and the browser" className='img'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
