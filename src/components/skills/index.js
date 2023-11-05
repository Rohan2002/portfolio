import React from "react";

import { Header } from 'semantic-ui-react'

import "./index.css";

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-container">
                <Header as='h1'>Skills</Header>
            </div>
            <div className="skills-content-container">
                <div className="text-container-skill">
                    <Header as="h2">Languages</Header>
                    <div>
                        Python, C, Java, Clojure, HTML/CSS, Javascript/Typescript
                    </div>
                </div>
                <div className="text-container-skill">
                    <Header as="h2">Spoken Languages</Header>
                    <div>
                        English, Marathi, Hindi, Japanese
                    </div>
                </div>
                <div className="text-container-skill">
                    <Header as="h2">Framework and Tools</Header>
                    <div>
                        Git, Docker, Kubernetes, JavaFX, Redis, Operating System Design, Javascript App Frameworks (React.js, Next.js, Node.js), 
                        <br/>
                        Databases, Python App Frameworks (Django, Flask), Microservices, Concurrency, Automated Testing
                    </div>
                </div>
                <div className="text-container-skill">
                    <Header as="h2">Interpersonal Skills</Header>
                    <div>
                        Communication, Empathy, Problem Solving, Teamplayer, Adaptibility
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;  