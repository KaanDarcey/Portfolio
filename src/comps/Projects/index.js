import React from 'react';
import './project.scss';
import ProjectItem from './ProjectItem';

function Project({}){
    return(
        <div className='project'>
            <h2 className='projectTitle'>PROJECTS</h2>
            <div className='itemContainer'>
                <ProjectItem projectName='Happihour' projectRole='Front-End Developer' git='https://github.com/Peeterlee/Happihour' descr='Happihour is a mobile app for Android and IOS made using React Native. Happihour is an app that helps users find nearby happy hour deals in fun and affordable environments. The app was made by a group of four, I was the front end eveloper for the project and created the majority of the layouts and stylesheets based on the designs provided. As well as collecting data and inserting and retrieving it using PHP and MySQL.'/>
                <ProjectItem projectName='Dino-World' projectRole='Javascript Developer' git='https://github.com/KaanDarcey/Dino-World' descr='Dino World is a web application made using HTML, CSS, and Javascript. Dino World is a education web app that allows young kids to explore differant time periods and learn about the nearly 50 plus dinosaurs by feeding and growing them. The project was made as part of a three person group, I was personally responsible for the majority of the interactive and dynamic elements as well as some of the designs.'/>
                <ProjectItem projectName='Pokemon TCG' projectRole='Web Developer' descr='Pokemon TCG is a web application mini game in which players collect pokemon cards that they can find in the world. I created it using HTML, CSS, and JavaScript. It was my first attempt as using JavaScript. Even though it is far frmo perfect I learned a lot from the experience and found it very fun. The project was a homework asisgnment in which i had to use interactive methods to display a product. In my case that product was Pokemon cards.'/>
            </div>
        </div>
    )
}

export default Project;