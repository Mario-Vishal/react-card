import React from 'react';
import './ImgLogo.css';



const ImgLogo = ({image,logo,Width,Position}) => {
    console.log(image.clientWidth);
    const st1 = {left:Position};
    const st2 = {width:Width};
    return(
        <div className="background-img">
            <img className="backImg" src={image} alt="background" /> 
            <div className="front-logo" style={st1}>
                <img className="frontLogo" src={logo} alt="logo" style={st2} />
            </div>
        </div>
    )
};


export default ImgLogo;