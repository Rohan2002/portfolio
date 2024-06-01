import React from "react";

import { Header } from 'semantic-ui-react'

import "./index.css";

const AboutMe = () => {
    const BlogLink = "https://r0han-dev.mataroa.blog/";
    return (
        <div className="about-me-container">
            <div className="about-me-container">
                <Header as='h1'>About Me</Header>
            </div>
            <div className="about-me-content-container">
                <div className="about-me-text-container">
                    Hey there, I'm Rohan!
                    <br />
                    <br />
                    I am a software engineer with over 3 years of professional experience.
                    <br />
                    <br />
                    I work with application development,
                    functional programming, and distributed systems.
                    <br />
                    <br />
                    I graduated from Rutgers University with a Bachelor's in Computer Science and a minor in Mathematics on May 2024, 
                    receiving Computer Science honors and <i>cum laude</i>.
                    <br />
                    <br />
                    Apart from work, I love to travel, write tech and non-tech <a target="_blank" rel="noreferrer" href={BlogLink}>blogs</a>, explore different cultures and try different foods!
                </div>
            </div>

        </div>
    )
};

export default AboutMe;  