import Hero from './Hero.js'
import Meals from './Meals.js'
import Testimonal from './Testimonal.js'
import About from './About.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from './Wrapper.js';
import Booking from './Booking.js';
import Submit from './ConfirmBooking.js';
import Error from './Error.js';
import ConfirmBooking from './ConfirmBooking.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Wrapper>
                    <Hero/>
                    <Meals/>
                    <Testimonal/>
                    <About/>
                </Wrapper>,
        errorElement: <Error></Error>
    },
    {
        path: '/testimonial',
        element: <Wrapper><Testimonal></Testimonal></Wrapper>
    },
    {
        path: '/meals',
        element: <Wrapper><Meals></Meals></Wrapper>
    },
    {
        path: '/about',
        element: <Wrapper><About></About></Wrapper>
    },
    {
        path: '/booking',
        element: <Wrapper><Booking></Booking></Wrapper>
    },
    {
        path: '/submit',
        element: <Wrapper><ConfirmBooking/></Wrapper>
    }
])

export default function Main(){
    return(
        <main>
            <RouterProvider router={router} ></RouterProvider>
        </main>
    )
}