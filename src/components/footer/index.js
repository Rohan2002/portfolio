import React from "react";
import './index.css';
import Socials from "../socials";
const Footer = () => {
    return (
        <div className="footer-container">
            <Socials />
            <div className="credits-container">
                Made by Rohan Deshpande using React.js
            </div>
        </div>
    )
}
export default Footer;