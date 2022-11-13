import React from "react";
import logo from "../../assests/logo_heart.png";
import "./header.scss";

function copyEmail()
{
    navigator.clipboard.writeText('marta@studioimaginalis.com');
    alert("Email address copied to clipboard.");
}

const Header = () => {
    return (
        <div className="header">
            <h1>Studio Imaginalis</h1>
            <div className="header__logo">
                <img src={logo}/>
            </div>
            <h2 className="email"><a onClick= {copyEmail}>marta@studioimaginalis.com</a></h2>
        </div>
    )
}

export default Header;