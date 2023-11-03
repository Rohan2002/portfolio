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
                <p>
                    Hello, I'm Rohan!
                    <br/>
                    <br/>
                    I have a diverse background, having spent my formative years in Tokyo, pursued my education in New Jersey, and 
                    gained work experience at companies
                    from the United States, Japan, and India.
                    I'm constantly enthusiastic about exploring fresh viewpoints and ideas.
                </p>
            </div>
        </div>
    )
};

export default AboutMe;