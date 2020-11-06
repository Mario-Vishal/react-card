import React from 'react';
import TechBtn from './TechBtn';

const TechStack = ({techList}) => {

    let renderedList = [];
    

    if (techList){
        renderedList = techList.map((tech) => {
            return <TechBtn name={tech} />
        });
    }
    
    
    
    return(

        <div className="tech-list">
            {renderedList}
        </div>
    )
}

export default TechStack;