import React, { useState } from "react";

const BookingForm = ({ availableTimes, setAvailableTimes  }) => {

    const [date, setDate] = useState('')
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Table booked on ${date} at ${selectedTime}`);
        setDate('')
        setSelectedTime('')
        setGuests(1)
        setOccasion('')
    }    

    const handleDateChange = (e) => {
      setDate(e.target.value)
      setAvailableTimes();
    }
    
    return (
      <>
        <h1>Book Now</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="res-date">Choose date</label>

            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
            />

            <label htmlFor="res-time">Choose time</label>

            <select
              id="res-time"
              disabled={!date}
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}>
              {availableTimes === undefined ? 'No time available' : availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <label htmlFor="guests">Number of guests</label>

            <input
              type="number"
              placeholder="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              max="10"
              id="guests"
            />

            <label htmlFor="occasion">Occasion</label>

            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>

            <input
              type="submit"
              value="Make your reservation"
              disabled={!date}
            />
          </fieldset>
        </form>
      </>
    );
}

export default BookingForm;