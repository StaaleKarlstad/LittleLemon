import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/booking");
  };

  return (
    <section className="hero">
      <div className="hero-div">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist{" "}
        </p>
        <div className="hero-button">
          <Button onClick={clickHandler} text="Book a Table"></Button>
        </div>
      </div>
      <div className="hero-img-div">
        <img
          src="../../assets/restaurantfood.jpg"
          alt="restaurant food"
          className="hero-img"
        ></img>
      </div>
    </section>
  );
}
