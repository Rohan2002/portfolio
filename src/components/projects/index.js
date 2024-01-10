import React, { useState } from 'react'
import './index.css'
import projectData from './projects.json';
import { Menu, Header, Card } from 'semantic-ui-react'
import ProjectCard from './project';

const ProjectView = () => {
    const [activeItem, setActiveItem] = useState("All");
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }
    return (
        <div className="projects-container">
            <div className="projects-button-container">
                <Header as='h1'>Recent projects</Header>
            </div>
            <div className="projects-content-container">
                <Menu text>
                    <Menu.Item header>Sort By</Menu.Item>
                    <Menu.Item
                        name='All'
                        active={activeItem === 'All'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Application'
                        active={activeItem === 'Application'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Library'
                        active={activeItem === 'Library'}
                        onClick={handleItemClick}
                    />
                </Menu>
            </div>
            <div className='projects-view-container'>
                <Card.Group>
                    {activeItem === "All" ?

                        projectData.map((val, index) => (
                            <ProjectCard
                                key={index}
                                name={val.name}
                                image={val.image}
                                description={val.description}
                                date={val.date}
                                link={val.link}
                                tools={val.tools}
                                award={val.award}
                            />
                        ))

                        :
                        projectData.filter((val) => val.type === activeItem).map((val, index) => (
                            <ProjectCard
                                key={index}
                                name={val.name}
                                image={val.image}
                                description={val.description}
                                date={val.date}
                                link={val.link}
                                tools={val.tools}
                                award={val.award}
                            />
                        ))}
                </Card.Group>
            </div>
        </div>
    );
}

export default ProjectView;