import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="navel">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/booking">Reservations</Link>
        </li>

        <li>
          <Link to="/order">Order</Link>
        </li>

        <li>
          <Link to="/">Menu</Link>
        </li>

        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
