

export default function BookingSummary({formData, handleGoBack, handleSubmit}){
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
              onClick={handleGoBack}>
                Back
            </button>
            <button
                data-testid='submit-button'
                type="submit"
                value="Confirm Reservation"
                onClick={handleSubmit}>
                    Confirm reservation
                </button>
        </div>
    )
}