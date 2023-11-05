import React from "react";

import { Header, Image } from 'semantic-ui-react'

import "./index.css";

import Scuba from './scuba.jpeg';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me-container">
                <Header as='h1'>About Me</Header>
            </div>
            <div className="about-me-content-container">
                Hey there, I'm Rohan!
                <br />
                <br />
                I'm a tech enthusiast who's grown from an eager intern to a tech lead by taking ownership of major projects and delivering them on time.
                <br />
                <br />
                Some of these major projects include

                <ul>
                    <li>
                        <b>File comparison software at KPMG.</b>
                    </li>
                    <li>
                        <b> Real-time data collection software at Shumyatsky Lab.</b>
                    </li>
                    <li>
                        <b>Press release web application at HealCo Inc.</b>
                    </li>
                    <li>
                        <b>Organizing company-wide knowledge-sharing sessions at KPMG.</b>
                    </li>
                </ul>
                With a strong knack for effective <b>communication</b> and the ability to <b>adapt</b> to various work environments,
                I excel in fostering collaboration and believe in the power of diversity to drive innovation.
                <br />
                <br />
                I'm currently studying <b>computer science</b> and <b>mathematics</b> at <b>Rutgers University, New Brunswick</b> and will graduate with
                a bachelors in May 2024.

                I am interested in developing applications from the perspective of operating system design.
                <br />
                <br />
                Apart from work, I love to travel and explore different cultures and also scuba dive with my girlfriend, Sarah!
            </div>
            <div className="aboutme-image-container">
                <Image src={Scuba} size='medium' circular />
            </div>
        </div>
    )
};

export default AboutMe;  