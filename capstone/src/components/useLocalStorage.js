export default function useLocalStorage(key){

    const setBooking = (value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }

    const getBooking = () => {
        try {
            const booking = window.localStorage.getItem(key);
            return booking ? JSON.parse(booking) : 'undefined';
        } catch (error) {
            console.log("OH NOOOOOO")
        }
    }
    return { setBooking, getBooking }
}