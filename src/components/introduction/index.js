import React from "react";

import { Image, Header } from 'semantic-ui-react'

import "./index.css";

import RohanProfilePic from "./images/profile-picture.jpeg";
import Socials from "../socials";

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
            <Socials/>
        </div>
    )
};

export default IntroductionPage;