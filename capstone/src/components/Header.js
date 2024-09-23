import Nav from "./nav/Nav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    const handleLogoClick = () => {
        navigate('/')
    }
  return (
    <header>
      <img className="header-logo" src="../../assets/Logo.svg" alt="Little Lemon Logo" onClick={handleLogoClick}>
      </img>
      <Nav></Nav>
    </header>
  );
}
