import React from "react";

import { Header, Image } from 'semantic-ui-react'

import "./index.css";

import Scuba from './scuba.jpeg';

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
                    I am a software engineer with a total of 3 years of industrial experience.
                    <br />
                    <br />
                    I have worked primarily within application development,
                    functional programming, distrubuted systems and computer security.
                    <br />
                    <br />
                    I will graduate Rutgers University with a bachelors in computer science
                    and minor in mathematics on May 2024.
                    <br />
                    <br />
                    Apart from work, I love to travel, write tech and non-tech <a target="_blank" rel="noreferrer" href={BlogLink}>blogs</a>, explore different cultures and also scuba dive with my girlfriend, Sarah!
                </div>
            </div>
            <div className="aboutme-image-container">
                <Image src={Scuba} size='medium' circular />
            </div>
        </div>
    )
};

export default AboutMe;  