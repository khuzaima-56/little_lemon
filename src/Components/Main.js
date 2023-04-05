import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
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
    submitAPI(formdata) && navigate('/booking-confirmed')
  };   

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={state} setAvailableTimes={dispatch}  onSubmit={submitForm}/>
          }></Route>

        <Route path="booking-confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
