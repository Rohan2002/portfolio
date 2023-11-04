import React from "react";

import { Image, Header, Icon } from 'semantic-ui-react'

import "./index.css";

import RohanProfilePic from "./images/profile-picture.jpeg";

const GitHubLink = "https://github.com/Rohan2002";
const LinkedinLink = "https://www.linkedin.com/in/rohan-deshpande-2002/";
const InstagramLink = "https://www.instagram.com/rohan_dpnde/";
const resumeLink = "/Rohan-Deshpande-Resume.pdf";

const IntroductionPage = () => {
    return (
        <div className="introduction-container">
            <div className="profile-image-container">
                <Image className="profile-image" src={RohanProfilePic} size='medium' circular />
            </div>
            <div className="name-container">
                <Header as='h1'>Rohan Deshpande</Header>
            </div>
            <div className="email-container">
                <b>rohan</b> [dot] <b>deshpande</b> [at] <b>rutgers</b> [dot] <b>edu</b>
            </div>
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
                <a target="_blank" rel="noreferrer" href={resumeLink}>
                    <Icon className="icon-design" link size='big' name='file' />
                </a>
            </div>
        </div>
    )
};

export default IntroductionPage;