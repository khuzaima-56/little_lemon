import ChefImage from '../Assets/resChefB.jpg'
import Restaurant from '../Assets/restaurant.jpg'

const About = () => {
  const about =
    "Little Lemon is a Chicago-based fast-casual eatery that specializes in fresh, healthy cuisine made from locally sourced ingredients. Their menu boasts an array of customizable grain bowls, salads, wraps, and smoothies, all designed to cater to different dietary needs and preferences. Little Lemon's focus is on providing accessible, nutritious meals to everyone, without sacrificing taste or convenience. Whether you're looking for a quick bite on the go or a satisfying meal to fuel your day, Little Lemon has got you covered with their flavorful, made-from-scratch dishes.";
  
  const image_styling = {
    width: '244px',
    height: '300px',
  }

    return (
      <section className="about">
        <div className="text">
          <h1 className="res_name">Little Lemon</h1>
          <h3 className="loc">Chicago</h3>
          <p className="about_desc">{about}</p>
        </div>

        <div className='images'>
          <img className='im1' style={image_styling} src={ChefImage} alt="chef" />
          <img className='im2' style={image_styling} src={Restaurant} alt="restaurant" />
        </div>
      </section>
    );
};

export default About;
