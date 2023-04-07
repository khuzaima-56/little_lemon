import { useLocation } from "react-router-dom";
import "../Styles/confirmation.css"
import Tick from "../Assets/Tick.png"

const ConfirmedBooking = () => {
    const location = useLocation();
    const formdata = location.state;
    const id = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
    const tableno = Math.floor(Math.random() * (30 - 1 + 1)) + 1;

    return (
      <section className="confirmation">
        <h1 id="cHeading">
          Successful reservation!
          <img className="tick" src={Tick} alt='' />
        </h1>
        <div className="confirmDesc">
          <p>Reservation ID: </p> <p>{id}</p>
          <p>Table No : </p> <p>{tableno} </p>
          <p>Guests : </p> <p>{formdata.guests}</p>
          <p>Date : </p> <p>{formdata.date}</p>
          <p>Time :</p> <p> {formdata.selectedTime}</p>
          <p>Occasion :</p> <p>{formdata.occasion}</p>
        </div>
      </section>
    );
}

export default ConfirmedBooking;