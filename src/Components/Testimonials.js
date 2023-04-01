import data from '../Assets/MOCK_DATA.json'
import Testimonail from './Testimonial';

const Testimonials = () => {

  return (
    <section className='testimonials'>
      <h1>Testimonials</h1>
      {data.map( (user) => {
        return <Testimonail key= {user.Username} userdata={user} />;
      })}
    </section>
  );
};

export default Testimonials;
