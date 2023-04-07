import BookingForm from './BookingForm.js'
import '../Styles/BookingForm.css'

const BookingPage = ({ availableTimes, setAvailableTimes, onSubmit }) => {

    return (
      <section className='bookingPage'>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          onSubmit = {onSubmit}
        />
      </section>
    );
}

export default BookingPage