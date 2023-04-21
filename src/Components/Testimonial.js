import { AiTwotoneStar } from "react-icons/ai";
const Testimonail = (props) => {
  const user = props.userdata;

  return (
    <article className="testimonial">
      <div className="h">
        <img className="dp" src={user.Image} alt="User Dp" />
      </div>
      <div className="namediv">
        <h3 className="name">{user.Name}</h3>
      </div>

      <div>
        <p className="stars">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </p>
      </div>

      <div>
        <p className="comment">{user.Comment}</p>
      </div>
    </article>
  );
};

export default Testimonail;
