import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [activeLink, setActiveLink] = useState("home");
  
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  }

  return (
    <nav className="navbar">
      <ul className="navel">
        <li>
          <Link
            className={activeLink === "home" ? "nav-link active" : "nav-link"}
            onClick={() => handleLinkClick("home")}
            to="/">
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={activeLink === "about" ? "nav-link active" : "nav-link"}
            onClick={() => handleLinkClick("about")}>
            About
          </Link>
        </li>

        <li>
          <Link
            to="/booking"
            className={activeLink === "reserve" ? "nav-link active" : "nav-link"}
            onClick={() => handleLinkClick("reserve")}>
            Reservations
          </Link>
        </li>

        <li>
          <Link
            to="/order"
            className={activeLink === "order" ? "nav-link active" : "nav-link"}
            onClick={() => handleLinkClick("order")}>
            Order
          </Link>
        </li>

        <li>
          <Link
            to="/menu"
            className={activeLink === "menu" ? "nav-link active" : "nav-link"}
            onClick={() => handleLinkClick("menu")}>
            Menu
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className={activeLink === "login" ? "nav-link active" : "nav-link"}
            onClick={() => handleLinkClick("login")}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
