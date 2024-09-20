import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import BookingSummary from "./BookingSummary";
import InputForm from "./InputForm";

export default function BookingForm({ availableTimes, dispatch, submit }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [showSummary, setShowOverview] = useState(false);
  const { getBooking, setBooking } = useLocalStorage(
    formData.firstname + formData.lastname
  );

  const handleContinue = (e) => {
    e.preventDefault()
    setShowOverview(true);
    setBooking(formData)
  };

  const handleGoBack = () => {
    setShowOverview(false)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(value)
    console.log(id)
    if (id === 'date'){
      const date = new Date(value);
      dispatch(date);
    }
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooking(formData);
    const booking = getBooking();
    submit(booking);
  };

  return (
    <>
      {showSummary ? (
        <BookingSummary
          formData={formData}
          handleGoBack={handleGoBack}
          handleSubmit={handleSubmit}
        ></BookingSummary>
      ) : (
        
        <InputForm
          formData={formData}
          handleContinue={handleContinue}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          availableTimes={availableTimes}
        ></InputForm>
      )}
    </>
  );
}
