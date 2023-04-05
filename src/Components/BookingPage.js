import BookingForm from './BookingForm.js'

const BookingPage = ({ availableTimes, setAvailableTimes, onSubmit }) => {

    return (
      <section>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          onSubmit = {onSubmit}
        />
      </section>
    );
}

export default BookingPage