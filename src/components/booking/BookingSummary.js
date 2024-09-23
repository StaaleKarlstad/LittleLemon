export default function BookingSummary({
  formData,
  handleGoBack,
  handleSubmit,
}) {
  return (
    <div className="booking-summary-container">
      <h1>Your Reservation</h1>
      <div className="booking-summary">
        <div className="booking-summary-info">
          <h3>Firstname:</h3>
          <p>{formData.firstname}</p>
        </div>
        <div className="booking-summary-info">
          <h3>Lastname: </h3>
          <p>{formData.lastname}</p>
        </div>
        <div className="booking-summary-info">
          <h3>Date: </h3>
          <p>{formData.date}</p>
        </div>
        <div className="booking-summary-info">
          <h3>Time: </h3>
          <p>{formData.time}</p>
        </div>
        <div className="booking-summary-info">
          <h3>Guests: </h3>
          <p> {formData.guests}</p>
        </div>
        <div className="booking-summary-buttons">
          <button
            className="booking-summary-button-back"
            onClick={handleGoBack}
          >
            Back
          </button>
          <button
            className="booking-summary-button-confirm"
            data-testid="submit-button"
            type="submit"
            value="Confirm"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
