import Dish from '../Assets/restauranfood.jpg'
import Button from './Button.js'

const Hero = () => {
    return (
      <section className="hero">
        <div className="herotext">
          <h1 className="title">Little Lemon</h1>
          <h3 className="city">Chicago</h3>
          <p className="description">
            As a family-owned establishment, our Mediterranean restaurant prides
            itself on serving up traditional recipes with a touch of modern
            flair.
          </p>
          <Button title='Reserve a Table'/>
        </div>
        <img className="dish" src={Dish} alt="dish" />
      </section>
    );
}

export default Hero;