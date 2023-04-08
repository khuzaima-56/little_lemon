import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import About from './About'
import Specials from "./Specials";
import Testimonials from './Testimonials'
import ConfirmedBooking from "./ConfirmedBooking";
import React, { useReducer } from "react";
import { fetchdata } from "../api";
import { submitAPI } from "../api";


function Main() {
  const updateTimes = (state, action) => {
    const date = new Date(action.selectedDate);
    const today = new Date();

    if (date < today) {
      return undefined;
    }

    return fetchdata(date);
  };

  const initializeTimes = () => {
    const today = new Date();
    const availableTimes = fetchdata(today);
    return availableTimes;
  };

  const navigate = useNavigate()
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = (formdata) => {
    submitAPI(formdata) && navigate('/booking-confirmed', {state: formdata})
  };   

  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
          aria-label="Home Page Button"></Route>

        <Route
          path="/about"
          element={
            <>
              {" "}
              <Testimonials /> <About />
            </>
          }
          aria-label="About Page Button"></Route>

        <Route
          path="/order"
          element={<Specials />}
          aria-label="Order Online Page"></Route>

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state}
              setAvailableTimes={dispatch}
              onSubmit={submitForm}
            />
          }
          aria-label="Booking Page Button"></Route>

        <Route path="booking-confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
