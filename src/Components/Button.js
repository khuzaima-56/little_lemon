import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Button = (props) => {
  const navigate = useNavigate();
  const btnRef = useRef(null);

  useEffect(() => {
    const btnElement = btnRef.current;
    const handleClick = () => {
      if (btnElement.innerText === "Reserve a Table") navigate("/booking");
      else if (btnElement.innerText === 'Online Menu') navigate('/menu')
      else if(btnElement.innerText === 'Back to Home') navigate('/little_lemon')
      window.scrollTo(0, 0);
    };

    if (btnElement) btnElement.addEventListener("click", handleClick);

    return () => {
      if (btnElement) btnElement.removeEventListener("click", handleClick);
    };
  });

  return (
    <button ref={btnRef} className='button' id="btn">
      {props.title}
    </button>
  );
};

export default Button;
