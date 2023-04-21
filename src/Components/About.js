import ChefImage from '../Assets/resChefB.jpg'
import Restaurant from '../Assets/restaurant.jpg'

const About = () => {
  const about =
    "Little Lemon is a fast-casual eatery located in Chicago, offering fresh and healthy cuisine made from locally sourced ingredients. Their menu features a variety of customizable grain bowls, salads, wraps, and smoothies, catering to diverse dietary needs and preferences. Little Lemon is committed to providing accessible, nutritious meals without compromising taste or convenience. Their flavorful, made-from-scratch dishes are perfect for anyone looking for a quick bite on the go or a satisfying meal to fuel their day. Whether you're in the mood for a refreshing smoothie or a hearty salad, Little Lemon has got you covered. Enjoy their delicious meals while supporting local farmers and the community.";

    return (
      <section className="about">
        <div className="text">
          <h1 className="res_name">Little Lemon</h1>
          <h3 className="loc">Chicago</h3>
          <p className="about_desc">{about}</p>
        </div>

        <div className='images'>
          <img className='im1'  src={ChefImage} alt="chef" />
          <img className='im2' src={Restaurant} alt="restaurant" />
        </div>
      </section>
    );
};

export default About;
