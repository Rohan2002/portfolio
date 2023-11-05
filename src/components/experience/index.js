import React from "react";

import { Header, Item } from 'semantic-ui-react'

import ExperienceCard from './experience';

import ExperienceData from "./experience_data.json";
import "./index.css";

const Experiences = () => {
    return (
        <div className="experiences-container">
            <div className="experiences-container">
                <Header as='h1'>Experience</Header>
            </div>
            <div className="experiences-content-container">
                <Item.Group>
                    {ExperienceData.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            name={exp.name}
                            date={exp.date}
                            location={exp.location}
                            work={exp.work}
                            image={exp.image}
                            title={exp.title}
                            link={exp.link}
                            tech={exp.technologies}
                        />
                    ))}
                </Item.Group>
            </div>
        </div>
    )
};

export default Experiences;