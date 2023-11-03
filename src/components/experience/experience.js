import React from "react";
import { Item, Header } from 'semantic-ui-react'

import KpmgImage from './companies/kpmg.jpeg';
import HealCoImage from './companies/healco.svg';
import WhizAiImage from './companies/whizai.jpeg';
import RutgersImage from './companies/rutgers.jpeg';

import './index.css';

const ImageMapping = {
    "kpmg": KpmgImage,
    "healco": HealCoImage,
    "whizai": WhizAiImage,
    "rutgers": RutgersImage,
}
const ExperienceCard = (props) => {
    return (
        <Item>
            <Item.Image className="mini-image-container" size='mini' src={ImageMapping[props.image]} />
            <Item.Content>
                <Header as="h3">{props.title} — <a id="company-link" target="_blank" href={props.link}>{props.name}</a></Header>
                <Item.Meta>
                    <span>
                        {props.date}
                    </span>
                    <span className="location">
                        {props.location}
                    </span>
                </Item.Meta>
                <div className="work-experience-container">
                    {props.work.map((exp, index) => {
                        return (
                            <Item.Description key={index}>{exp}</Item.Description>
                        );
                    })}
                </div>

            </Item.Content>
        </Item>
    );
}

export default ExperienceCard;