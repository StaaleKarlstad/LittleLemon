
export default function InputForm({
    formData, 
    handleInputChange, 
    handleContinue, 
    handleSubmit, 
    handleDateChange,
    availableTimes}){
    
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

    <button
      data-testid='continue-button'
      value="Make Your reservation"
      onClick={handleContinue}>
        Continue
    </button>
  </form>
    )
}