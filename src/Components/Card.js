import Bike from '../Assets/bike.png'

const Card = (props) => {

    const bikeStyle = {
      width: "30px",
      height: "30px",
    };

    const data = props.data
    return (
      <article className="card">
        <img className="cardImg" src={data.img} alt={data.title} />
        <div className="cardHeader">
          <h1 className="cardTitle">{data.title}</h1>
          <h3 className="cardPrice">{data.price}</h3>
        </div>
        <p className="cardDesc">{data.description}</p>
        <h5 className="order">
          <span>Order a delivery</span>
          <img className="bike" style={bikeStyle} src={Bike} alt="" />
        </h5>
      </article>
    );
}

export default Card;