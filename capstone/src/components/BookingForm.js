import { useState } from 'react';


export default function BookingForm( {availableTimes, dispatch, submit} ) {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
        });


    const handleInputChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        console.log(value)
        setFormData({ ...formData, [id]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formData)
      };

    const handleDateChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        const date = new Date(value)
        dispatch(date);
        handleInputChange(e);
    }

  return (
    <form className='bookingform' onSubmit={handleSubmit}>
      <label htmlFor="firstname">Firstname</label>
      <input
        type='text'
        id='firstname'
        data-testid='firstname'
        value={formData.firstname}
        onChange={handleInputChange}
      />

      <label htmlFor="lastname">Lastname</label>
      <input
        type='text'
        id='lastname'
        data-testid='lastname'
        value={formData.lastname}
        onChange={handleInputChange}
      />

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="date"
        data-testid='date'
        value={formData.date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
          id="time"
          data-testid='time'
          value={formData.time}
          onChange={handleInputChange}
        >
        {availableTimes.map(times => <option key={times}>{times}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        data-testid='guests'
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleInputChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        data-testid='occasion'
        value={formData.occasion}
        onChange={handleInputChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input 
        data-testid='submit-button'
        type="submit" 
        value="Make Your reservation" 
        onClick={handleSubmit}/>
    </form>
  );
}
