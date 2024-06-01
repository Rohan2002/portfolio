import React, { useState } from "react";
import { Item, Header, Button, Icon } from 'semantic-ui-react'

import KpmgImage from './companies/kpmg.jpeg';
import HealCoImage from './companies/healco.svg';
import WhizAiImage from './companies/whizai.jpeg';
import RutgersImage from './companies/rutgers.jpeg';
import QBHacksImage from './companies/qbhacks.png';
import Ziplyne from './companies/ziplyne.jpeg';


import './index.css';

const ImageMapping = {
    "kpmg": KpmgImage,
    "healco": HealCoImage,
    "whizai": WhizAiImage,
    "rutgers": RutgersImage,
    "qbhacks": QBHacksImage,
    "ziplyne": Ziplyne,
}
const ExperienceCard = (props) => {
    const [on, setOn] = useState(0);
    const handleOnClick = (event) => {
        setOn(!on);
    }
    return (
        <Item className="experience-card">
            <Item.Image className="mini-image-container" size='mini' src={ImageMapping[props.image]} />
            <Item.Content>
                <Header as="h3">{props.title} — <a id="company-link" target="_blank" rel="noreferrer" href={props.link}>{props.name}</a></Header>
                <Item.Meta>
                    <span>
                        {props.date}
                    </span>
                    <span className="location">
                        {props.location}
                    </span>
                </Item.Meta>
                {!on ? '' : <div className="work-experience-container">
                    {props.work.map((exp, index) => {
                        return (
                            <Item.Description key={index}>{exp}</Item.Description>
                        );
                    })}
                    {
                        props.name === "KPMG" ? (
                            <div className="documents-container">
                                <div>
                                    <a className="link" target="_blank" rel="noreferrer" href="https://patents.google.com/patent/WO2022113378A1/en?assignee=KPMG+Ignition+Tokyo&oq=KPMG+Ignition+Tokyo&page=2">
                                        <Icon name="book" link size="big" /> PDF Table Merging Patent
                                    </a>
                                </div>
                                <div>
                                    <a className="link" target="_blank" rel="noreferrer" href="/kpmg-experience-letter.pdf">
                                        <Icon name="file" link size="big" /> Internship Feedback Report
                                    </a>
                                </div>
                                <div>
                                    <a className="link" target="_blank" rel="noreferrer" href="/KPMGAward.pdf">
                                        <Icon name="trophy" link size="big" /> Good Project Performance Achievement
                                    </a>
                                </div>
                            </div>
                        ) : ""
                    }
                </div>}
                <div className="skills-div">
                    <b>Skills:</b> {props.tech}
                </div>
                <div className="summary-div">
                    <b>Summary:</b> {props.summary}
                </div>
                <div className="button-div">
                    <Button className={`company-button-${props.image}`} type="button" onClick={handleOnClick}>{on ? "less" : "more"}</Button>
                </div>
            </Item.Content>

        </Item>
    );
}

export default ExperienceCard;