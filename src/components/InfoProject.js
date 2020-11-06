import React from 'react';



const InfoProject = (props) => {


    return(
        <div className="project-body">
            <div className="project-title">
                <h1>{props.title}</h1>
            </div>
            <div className="project-info">
                <h3>{props.info}</h3>
            </div>

        </div>
    )
};


export default InfoProject;