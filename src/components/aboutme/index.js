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
                Hello, I'm Rohan!
                <br />
                <br />
                Having grown up in Tokyo, studied in New Jersey and worked at American,
                Japanese and Indian companies, I'm always eager to discover new perspectives.
                <br />
                <br />
                I am studying computer science, and mathematics at Rutgers University, New Brunswick,
                and I am interested in developing applications from the perspective of operating system
                design.
                <br />
                <br />
                Apart from work, I love to scuba dive with my girlfriend Sarah!
            </div>
            <div className="aboutme-image-container">
                <Image src={Scuba} size='medium' circular />
            </div>
        </div>
    )
};

export default AboutMe;  