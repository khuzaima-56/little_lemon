import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/Logo.svg";

function Header () {
    const navigate = useNavigate();
    
    useEffect(() => {
        const handleClick = () => {
            navigate('/')
        }
        document.getElementById('logo').addEventListener('click', handleClick)

        return () => {
            document.getElementById('logo').removeEventListener('click',handleClick)
        }
    })

    const style = {
        cursor: 'pointer'
    }
    return (
        <header className='logo'>
            <Logo style={style} id='logo'/>
        </header>
    );
}

export default Header