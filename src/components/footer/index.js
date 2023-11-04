import React from "react";
import './index.css';
import { Icon } from 'semantic-ui-react'
const Footer = () => {

    const GitHubLink = "https://github.com/Rohan2002";
    const LinkedinLink = "https://www.linkedin.com/in/rohan-deshpande-2002/";
    const InstagramLink = "https://www.instagram.com/rohan_dpnde/";

    return (
        <div className="footer-container">
            <div className="social-container">
                <a target="_blank" rel="noreferrer" href={GitHubLink}>
                    <Icon className="icon-design" link size='big' name='github' />
                </a>
                <a target="_blank" rel="noreferrer" href={LinkedinLink}>
                    <Icon className="icon-design" link size='big' name='linkedin' />
                </a>
                <a target="_blank" rel="noreferrer" href={InstagramLink}>
                    <Icon className="icon-design" link size='big' name='instagram' />
                </a>
            </div>
            <div className="credits-container">
                Made by Rohan Deshpande using React.js
            </div>
        </div>
    )
}
export default Footer;