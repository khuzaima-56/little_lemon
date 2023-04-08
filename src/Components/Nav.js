import { Link } from "react-router-dom";

const Nav = ({ selectedPage, onPageChange }) => {

  return (
    <nav className="navbar">
      <ul className="navel">
        <li>
          <Link
            className={selectedPage === "home" ? "nav-link active" : "nav-link"}
            onClick={() => onPageChange("home")}
            to="/little_lemon">
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={
              selectedPage === "about" ? "nav-link active" : "nav-link"
            }
            onClick={() => onPageChange("about")}>
            About
          </Link>
        </li>

        <li>
          <Link
            to="/booking"
            className={
              selectedPage === "booking" ? "nav-link active" : "nav-link"
            }
            onClick={() => onPageChange("booking")}
            >
            Reservations
          </Link>
        </li>

        <li>
          <Link
            to="/order"
            className={
              selectedPage === "order" ? "nav-link active" : "nav-link"
            }
            onClick={() => onPageChange("order")}>
            Order
          </Link>
        </li>

        <li>
          <Link
            to="/menu"
            className={selectedPage === "menu" ? "nav-link active" : "nav-link"}
            onClick={() => onPageChange("menu")}>
            Menu
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className={selectedPage === "login" ? "nav-link active" : "nav-link"}
            onClick={() => onPageChange("login")}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
