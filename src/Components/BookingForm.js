import React, { useState } from "react";
import "../Styles/BookingForm.css";
import { FaCircleNotch, FaCircle } from "react-icons/fa";

const BookingForm = ({ availableTimes, setAvailableTimes, onSubmit  }) => {
    
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [date, setDate] = useState(tomorrow.toISOString().substring(0, 10));
    const [selectedTime, setSelectedTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [place, setPlace] = useState('Indoor')

    const today = new Date().toISOString().slice(0, 10);

    const handleDateChange = (e) => {
      const newDate = e.target.value
      setDate(newDate)
      setAvailableTimes({ selectedDate: newDate });
    }
    
    const handleSubmit = e => {
      e.preventDefault();
      onSubmit({
        date,
        selectedTime,
        guests,
        occasion,
        place
      });
    }

    return (
      <>
        <h3 className="tableHeading">Book & Dine!</h3>
        <form className="bookingform" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="res-date">Date</label>
            <input
              type="date"
              id="res-date"
              name="res-date"
              value={date}
              onChange={handleDateChange}
              min={today}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="res-time">Time</label>
            <select
              id="res-time"
              name="res-time"
              value={selectedTime}
              className="custom-select"
              onChange={(e) => setSelectedTime(e.target.value)}>
              {availableTimes === undefined
                ? "No time available"
                : availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              max="10"
              id="guests"
              name="guests"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required>
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>

          <fieldset className="place">
            <legend>Select Place</legend>
            <label id="indoor" onClick={() => setPlace("Indoor")}>
              {place === "Indoor" ? (
                <FaCircle className="icon" />
              ) : (
                <FaCircleNotch className="icon" />
              )}
              &nbsp; Indoor
            </label>

            <label id="outdoor" onClick={() => setPlace("Outdoor")}>
              {place === "Outdoor" ? (
                <FaCircle className="icon" />
              ) : (
                <FaCircleNotch className="icon" />
              )}
              &nbsp; Outdoor
            </label>
          </fieldset>

          <input
            className="submit"
            type="submit"
            value="Make your reservation"
          />
        </form>
      </>
    );
}

export default BookingForm;