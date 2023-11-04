import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import Chess from './pics/chess.png';
import GoodEats from './pics/ge.png';
import Sentry from './pics/sentry.png';
import Library from './pics/library.png';


const ImageMapping = {
    "chess": Chess,
    "goodeats": GoodEats,
    "sentry": Sentry,
    "library": Library
}

const ProjectCard = (props) => {
    return (
        <Card>
            <img className='card-image' src={ImageMapping[props.image]} alt="project"/>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.date}</span>
                </Card.Meta>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a target="_blank" rel="noreferrer" href={props.link}>
                    <Icon name='github' />
                </a>
                {props.award.length > 0 ? <div className='award-container'>
                    <Icon name="trophy" />: {props.award}
                </div> : ""
                }
                <div className='tool-container'>
                    <Icon name="code" />: {props.tools.join(', ')}
                </div>
            </Card.Content>
        </Card>
    );
}
export default ProjectCard;