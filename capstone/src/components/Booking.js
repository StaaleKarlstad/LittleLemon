import BookingForm from "./BookingForm";
import AvailableTimes from "./AvailableTimes";

export default function Booking({ availableTimes, dispatch, submit }) {
    return(
        <>
            <h1>Book a table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}></BookingForm>
        </>
    )
}