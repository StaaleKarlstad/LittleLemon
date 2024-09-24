import Hero from "./hero/Hero.js";
import Meals from "./menu/Meals.js";
import Testimonal from "./reviews/Testimonal.js";
import About from "./about/About.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./Wrapper.js";
import Booking from "./booking/Booking.js";
import Error from "./Error.js";
import ConfirmBooking from "./booking/ConfirmBooking.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Wrapper>
        <Hero />
        <Meals />
        <Testimonal />
        <About />
      </Wrapper>
    ),
    errorElement: <Error></Error>,
  },
  {
    path: "/reviews",
    element: (
      <Wrapper>
        <Testimonal></Testimonal>
      </Wrapper>
    ),
  },
  {
    path: "/menu",
    element: (
      <Wrapper>
        <Meals></Meals>
      </Wrapper>
    ),
  },
  {
    path: "/about",
    element: (
      <Wrapper>
        <About></About>
      </Wrapper>
    ),
  },
  {
    path: "/booking",
    element: (
      <Wrapper>
        <Booking></Booking>
      </Wrapper>
    ),
  },
  {
    path: "/submit",
    element: (
      <Wrapper>
        <ConfirmBooking />
      </Wrapper>
    ),
  },
]);

export default function Main() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
