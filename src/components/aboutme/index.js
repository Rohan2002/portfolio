import React from "react";

import { Header } from 'semantic-ui-react'

import "./index.css";

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me-container">
                <Header as='h1'>About Me</Header>
            </div>
            <div className="about-me-content-container">
                    Hello, I'm Rohan!
                    <br/>
                    <br/>
                    Having grown up in Tokyo, studied in New Jersey and worked at American, 
                    Japanese and Indian companies, I'm always eager to discover new perspectives.
                    <br/>
                    <br/>
                    I am studying computer science, and mathematics at Rutgers University, New Brunswick.
            </div>
        </div>
    )
};

export default AboutMe;  