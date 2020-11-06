import React from 'react';
import gitImg from '../assessts/git1.png';
import './Github.css';

const Github = ({link}) => {



    return(
        <div className="github">
            <a href={link}><img className="git" src={gitImg} alt="github" /></a>
        </div>
    )
}


export default Github;