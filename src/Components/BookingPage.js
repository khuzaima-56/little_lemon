import BookingForm from './BookingForm.js'

const BookingPage = ({ availableTimes, setAvailableTimes }) => {
    console.log(availableTimes)
    return (
      <section>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
      </section>
    );
}

export default BookingPage