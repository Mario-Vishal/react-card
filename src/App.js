import React from 'react';
import ProjectCard from './components/ProjectCard';
import backImg from './assessts/crown.png';
import frontLogo from './assessts/got.png';
import digits from './assessts/digits.png';
import neural from './assessts/neural-net.jpg';
import recog from './assessts/recognize.png';
import gear from './assessts/automateGear.png';
import code from './assessts/code.png'



class App extends React.Component {


    


    render(){
        return(
            <div style={{display:'flex',justifyContent:'space-around',flexFlow:'row',flexWrap:'wrap'}}>
              
                <ProjectCard 
                    title="Auto Class Scheduler" 
                    info="This is a python script which automatically schedules and opens your classes in their respective online platforms on a single click." 
                    tech={['python','selenium']}
                    image={code}
                    logo={gear}
                    Width={'9rem'}
                    Position={'8rem'}
                    link={"https://github.com/Mario-Vishal/automatic_online_class_scheduler"}
                />



                <ProjectCard
                    title="Game Of Thrones Analysis"
                    info="An analysis based web application project on the TV series called 'GAME OF THRONES'."
                    tech={['python','nlp','streamlit']}
                    image={backImg}
                    logo={frontLogo}
                    link={"https://github.com/Mario-Vishal/Game_Of_Thrones_Analysis"}
                 />

                <ProjectCard
                    title="Hand Written Recognition"
                    info="This is a deep learning project a web application where a user draws a digit and the model guesses the digit."
                    tech={['python','tensorflow','deep learning','flask','javascript']}
                    image={digits}
                    logo={neural}
                    Width={'12rem'}
                    Position={'6rem'}
                    link={"https://github.com/Mario-Vishal/hand-digit-recognition-web-app"}
                 />

                
            </div>
        )
    }
}

export default App;