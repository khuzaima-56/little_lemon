import Logo from "../Assets/footerlogo.png";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
const Footer = ({ selectedPage, onPageChange }) => {
  const style = {
    width: "100px",
    height: "auto",
  };

  const handleClick = (page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    onPageChange(page)
  };

  return (
    <footer>
      <div>
        <img className="chefs_im" style={style} src={Logo} alt="Logo" />
      </div>
      <ul className="nav_links">
        <h4 className="sitemap">SITEMAP</h4>
        <li>
          <Link onClick={() => handleClick("home")} to="/little_lemon">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => handleClick("about")} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={() => handleClick("booking")} to="/booking">
            Reservations
          </Link>
        </li>
        <li>
          <Link onClick={() => handleClick("order")} to="/order">
            Order Online
          </Link>
        </li>
        <li>
          <Link onClick={() => handleClick("menu")} to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link onClick={() => handleClick("login")} to="/login">
            Login
          </Link>
        </li>
      </ul>

      <article className="contact">
        <h4 className="sitemap">CONTACT US</h4>
        <div className="address">
          <p>
            <FaMapMarkerAlt fontSize={15} />
            &nbsp; 678 Pisa Ave, Chicago, IL 60611
          </p>
        </div>

        <p className="cell">
          <FaPhoneAlt fontSize={15} />
          &nbsp; (312) 593-2744
        </p>

        <p className="email">
          <FaRegEnvelope fontSize={16} />
          &nbsp; info@llchicago.com
        </p>
      </article>

      <article className="social">
        <h4 className="sitemap">CONTACT WITH US</h4>
        <a href="https://www.facebook.com/">
          <FaFacebook color="white" fontSize={20} className="icon" />
        </a>
        <a href="https://www.twitter.com/">
          <FaTwitter color="white" fontSize={20} className="icon" />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram color="white" fontSize={20} className="icon" />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube color="white" fontSize={20} className="icon" />
        </a>
      </article>
    </footer>
  );
};

export default Footer;
