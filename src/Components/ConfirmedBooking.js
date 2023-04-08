import { useLocation } from "react-router-dom";
import "../Styles/confirmation.css"
import Tick from "../Assets/Tick.png"
import { Link } from "react-router-dom";
import Homepage from "./Homepage";

const ConfirmedBooking = () => {
    const location = useLocation();
    const formdata = location.state;
    const id = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
    const tableno = Math.floor(Math.random() * (30 - 1 + 1)) + 1;

    const formattedTime = new Date(`2000-01-01T${formdata.selectedTime}:00`).toLocaleString(
      undefined,
      {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }
    );


    return (
      <section className="confirmation">
        <h1 id="cHeading">
          Successful reservation!
          <img className="tick" src={Tick} alt="" />
        </h1>
        <div className="confirmDesc">
          <p>Reservation ID: </p> <p>{id}</p>
          <p>Table No : </p> <p>{tableno} </p>
          <p>Guests : </p> <p>{formdata.guests}</p>
          <p>Date : </p> <p>{formdata.date}</p>
          <p>Time :</p> <p> {formattedTime}</p>
          <p>Occasion :</p> <p>{formdata.occasion}</p>
        </div>
        <div className="back">
          <Link className='LinkBack' to="/" element={<Homepage />}>
            Back to Home
          </Link>
        </div>
      </section>
    );
}

export default ConfirmedBooking;