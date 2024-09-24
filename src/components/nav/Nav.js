
import { useState } from "react";
import NavLinkElement from "./NavLinkElement";
import './Nav.css'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { linkTo: "/", text: "Home", onClick: toggleMenu },
    { linkTo: "/about", text: "About", onClick: toggleMenu },
    { linkTo: "/menu", text: "Menu", onClick: toggleMenu },
    { linkTo: "/reservations", text: "Reservations", onClick: toggleMenu },
    { linkTo: "/reviews", text: "Reviews", onClick: toggleMenu },
    { linkTo: "/login", text: "Login", onClick: toggleMenu },
  ];
  return (
    <nav className="navbar">
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="burger-menu-bar"></div>
        <div className="burger-menu-bar"></div>
        <div className="burger-menu-bar"></div>
      </div>

      <ul className={`navbar-desktop`}>
        {navLinks.map((navLink) => (
          <NavLinkElement
            key={navLink.text + "desktop"}
            {...navLink}
          ></NavLinkElement>
        ))}
      </ul>
      <div className={`navbar-${mobileOpen ? "open" : "closed"}`}>
        <ul className={`navbar-mobile-${mobileOpen ? "open" : "closed"}`}>
          {navLinks.map((navLink) => (
            <NavLinkElement
              key={navLink.text + "mobile"}
              {...navLink}
            ></NavLinkElement>
          ))}
        </ul>
      </div>
    </nav>
  );
}
