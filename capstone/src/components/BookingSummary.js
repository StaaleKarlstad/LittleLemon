

export default function BookingSummary({formData, handleContinue, handleSubmit}){
    return (
        <div className='booking-summary'>
            <h1>BookingInfo</h1>
            <p>Firstname: {formData.firstname}</p>
            <p>Lastname: {formData.lastname}</p>
            <p>Date: {formData.date}</p>
            <p>Time: {formData.time}</p>
            <p>Guests: {formData.guests}</p>
            <p>Occasion: {formData.occasion}</p>
            <button
              onClick={handleContinue}>
                Back
            </button>
            <input
            data-testid='submit-button'
            type="submit"
            value="Confirm reservation"
            onClick={handleSubmit}/>
        </div>
    )
}