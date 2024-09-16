import { useReducer } from "react"
import { useNavigate } from 'react-router-dom'
import BookingForm from "./BookingForm"

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

export const updateTimes = (state, date) => {
    return fetchAPI(date)
}

export const initializeTimes = () => {
    return fetchAPI(new Date());
}

export default function Booking(){
    const initial = initializeTimes();
    const [availableTimes, dispatch] = useReducer(updateTimes, initial)
    const navigate = useNavigate();

    const succesfulSubmit = (bookingInfo) => {
        const submit = submitAPI(bookingInfo)
        if (submit){
            navigate('/submit')
        }
    }

    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={succesfulSubmit}></BookingForm>
    )
}