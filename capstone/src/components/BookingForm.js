import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import BookingSummary from './BookingSummary';
import InputForm from './InputForm';


export default function BookingForm( {availableTimes, dispatch, submit} ) {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
        });

    const [showSummary, setShowOverview] = useState(false)
    const {getBooking, setBooking} = useLocalStorage(formData.firstname + formData.lastname)

    const handleContinue = () => {
      setShowOverview(!showSummary)
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        console.log(value)
        setFormData({ ...formData, [id]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooking(formData)
        const booking = getBooking()
        submit(booking)
      };

    const handleDateChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        const date = new Date(value)
        dispatch(date);
        handleInputChange(e);
    }

  return (
    <>
      {showSummary ? <BookingSummary
        formData={formData}
        handleContinue={handleContinue}
        handleSubmit={handleSubmit}
      >
      </BookingSummary> :
      <InputForm
        formData={formData}
        handleContinue={handleContinue}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleDateChange={handleDateChange}
        availableTimes={availableTimes}>
      </InputForm>}
    </>
  );
}
