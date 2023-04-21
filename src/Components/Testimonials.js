import data from '../Assets/MOCK_DATA.json'
import Testimonail from './Testimonial';

const Testimonials = () => {

  return (
    <section className="testimonials">
      <h1>What people say about us!</h1>
      <section className='reviewCards'>
        {data.map((user) => {
          return <Testimonail key={user.Name} userdata={user} />;
        })}
      </section>
    </section>
  );
};

export default Testimonials;
