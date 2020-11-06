import React from 'react';
import './ProjectCard.css';
import InfoProject from './InfoProject';
import TechStack from './TechStack';
import ImgLogo from './ImgLogo';
import Github from './Github';

const ProjectCard = ({title,info,tech,image,logo,Width,Position,link}) => {


    return (
        <div className="container">

            <div className="card">

                <ImgLogo image={image} logo={logo} Width={Width} Position={Position} />

                <InfoProject 
                    title={title}
                    info={info}
                />

                <TechStack
                    techList={tech} 
                />

                <Github
                    link={link}
                 />

            </div>

            

        </div>
    );
};




export default ProjectCard;
