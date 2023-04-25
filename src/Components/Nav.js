import { Link } from "react-router-dom";

const Nav = ({ selectedPage, onPageChange }) => {

  return (
    <nav className="navbar">
      <ul className="navel">
        <li>
          <Link
            className={
              selectedPage === "little_lemon" ||
              selectedPage === "little_lemon/" ||
              selectedPage === ""
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => onPageChange("little_lemon")}
            to="/little_lemon">
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={
              selectedPage === "about" || selectedPage === "about/"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => onPageChange("about")}>
            About
          </Link>
        </li>

        <li>
          <Link
            to="/booking"
            className={
              selectedPage === "booking" || selectedPage === "booking/"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => onPageChange("booking")}>
            Reservations
          </Link>
        </li>

        <li>
          <Link
            to="/order"
            className={
              selectedPage === "order" || selectedPage === "order/"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => onPageChange("order")}>
            Order
          </Link>
        </li>

        <li>
          <Link
            to="/menu"
            className={
              selectedPage === "menu" || selectedPage === "menu/"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => onPageChange("menu")}>
            Menu
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className={
              selectedPage === "login" || selectedPage === "login/"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => onPageChange("login")}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
