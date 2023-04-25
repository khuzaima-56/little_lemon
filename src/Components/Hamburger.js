import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from 'react-icons/im'
import "../Styles/hamburger.css";
import { useState, useRef } from "react";

const Hamburger = ({ selectedPage, onPageChange }) => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [icon, setIcon] = useState(
       <GiHamburgerMenu
         fontSize="25"
         color="#495e57"
         className="icon"
       />
     );
     const toggleMenu = () => {
         if (!isMenuOpen) 
           setIcon(
             <ImCross fontSize="25" color="#495e57" className="icon" />
           );

         else
            setIcon(
              <GiHamburgerMenu fontSize="25" color="#495e57" className="icon" />
            );

       setIsMenuOpen(!isMenuOpen);
     };

const sliderRef = useRef();

  const handleClick = (page) => {
    onPageChange("about");
    toggleMenu();
    sliderRef.current.classList.remove("show");
  }

  return (
    <section className="hamburger">
      <div onClick={toggleMenu}>{icon}</div>
      <div ref={sliderRef} className={`slide ${isMenuOpen ? "show" : ""}`}>
        <ul>
            <Link
              className={
                selectedPage === "little_lemon" ||
                selectedPage === "little_lemon/" ||
                selectedPage === ""
                  ? "menu-link open"
                  : "menu-link"
              }
              onClick={() => handleClick("little_lemon")}
              to="/little_lemon">
              Home
            </Link>

            <Link
              to="/about"
              className={
                selectedPage === "about" || selectedPage === "about/"
                  ? "menu-link open"
                  : "menu-link"
              }
              onClick={() => handleClick('about')}>
              About
            </Link>

            <Link
              to="/booking"
              className={
                selectedPage === "booking" || selectedPage === "booking/"
                  ? "menu-link open"
                  : "menu-link"
              }
              onClick={() => handleClick("booking")}>
              Reservations
            </Link>

            <Link
              to="/order"
              className={
                selectedPage === "order" || selectedPage === "order/"
                  ? "menu-link open"
                  : "menu-link"
              }
              onClick={() => handleClick("order")}>
              Order
            </Link>

            <Link
              to="/menu"
              className={
                selectedPage === "menu" || selectedPage === "menu/"
                  ? "menu-link open"
                  : "menu-link"
              }
              onClick={() => handleClick("menu")}>
              Menu
            </Link>

            <Link
              to="/login"
              className={
                selectedPage === "login" || selectedPage === "login/"
                  ? "menu-link open"
                  : "menu-link"
              }
              onClick={() => handleClick("login")}>
              Login
            </Link>

        </ul>
        <div></div>
      </div>
    </section>
  );
};

export default Hamburger;
