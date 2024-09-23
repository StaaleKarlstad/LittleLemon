import NavLinkElement from "./nav/NavLinkElement";

export default function Footer() {
    const navLinks = [
        { linkTo: "/", text: "Home", onClick: ()=>{} },
        { linkTo: "/about", text: "About", onClick: ()=>{} },
        { linkTo: "/menu", text: "Menu", onClick: ()=>{} },
        { linkTo: "/reservations", text: "Reservations", onClick: ()=>{} },
        { linkTo: "/reviews", text: "Reviews", onClick: ()=>{} },
        { linkTo: "/login", text: "Login", onClick: ()=>{} },
      ];

  return (
    <footer>
      <img
        className="footer-logo"
        src="../../assets/logo.svg"
        alt="little lemon logo"
      ></img>
      <div className="footer-navigate">
        <h3>Navigate</h3>
        <ul className={`footer-links`}>
        {navLinks.map((navLink) => (
          <NavLinkElement
            key={navLink.text + "footer"}
            {...navLink}
          ></NavLinkElement>
        ))}
      </ul>
      </div>

      <div className="footer-contact">
        <h3>Contact</h3>
        <ul>
          <li>Address: blank</li>
          <li>Phone: blank</li>
          <li>Email: blank</li>
        </ul>
      </div>
      <div className="footer-social">
        <h3>Social media</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Tik Tok</li>
        </ul>
      </div>
    </footer>
  );
}
