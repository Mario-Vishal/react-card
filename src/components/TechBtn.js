import React from 'react';


const TechBtn = ({name}) => {

    const style = {
        border:'none',
        padding:'0.5rem',
        borderRadius:'0.3rem',
        margin:'0.7em',
        fontFamily:'Poppins',
        fontWeight:'bold'

    };

    return(
        <button className="tech-btn" style={style}>
            {name}
        </button>
    )
};


export default TechBtn;