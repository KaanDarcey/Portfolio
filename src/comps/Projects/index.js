import React, {useState} from 'react';
import './project.scss';
import ProjectItem from './ProjectItem';
import Slider from './Slider';

function Project({setShowProject={setShowProject}, setPickProject={setPickProject}}){

    const [changeProjects, setChangeProjects] = useState(false);

    var img1 ='',
        pname1 ='',
        prole1 = '',
        git1='',
        descr1 ='',
        tools1='',
        img2 ='',
        pname2 ='',
        prole2 = '',
        git2='',
        descr2 ='',
        tools2='',
        img3 ='',
        pname3 ='',
        prole3 = '',
        git3='',
        descr3 ='',
        tools3='',
        linkType='';

    if(changeProjects == false){
        linkType = 'Github';

        img1 ='happihour';
        pname1 ='Happihour';
        prole1 = 'Front-End Developer';
        git1='https://github.com/Peeterlee/Happihour';
        descr1 ='Happihour is a mobile application that helps connect users with nearby happy hour deals in their area.';
        tools1='React Native, PHP, MySQL';

        img2 ='dinoWorld';
        pname2 ='Dino-World';
        prole2 = 'Javascript Developer';
        git2='https://github.com/KaanDarcey/Dino-World';
        descr2 ='DinoWorld is an educational web application for kids that teaches them about the world of dinosaurs throughout the ages.';
        tools2='HTML, CSS, JavaScript';

        img3 ='pokemon';
        pname3 ='Pokemon TCG';
        prole3 = 'Web Developer';
        git3='https://github.com/KaanDarcey/PokemonTCG';
        descr3 ='Pokemon TCG is an interactive game where you go out and collect Pokemon cards.';
        tools3='HTML, CSS, JavaScript';

    } else {
        linkType = 'Behance';

        img1 ='gandalf';
        pname1 ='Gandalf';
        prole1 = 'Digital Artist';
        git1='https://www.behance.net/gallery/91461285/Gandalf-the-Grey-Photoshop-Painting';
        descr1 ='Gandalf the grey, a digital painting I created using photoshop.';
        tools1='Adobe Photoshop';

        img2 ='mechaG';
        pname2 ='Mecha Godzilla';
        prole2 = 'Digital Artist';
        git2='https://www.behance.net/gallery/91461355/Mecha-Godzilla-Poster';
        descr2 ='A made up poster for a Mecha Gozilla movie';
        tools2='Adobe Photoshop';

        img3 ='PS4';
        pname3 ='PS4 Controller';
        prole3 = 'Digital Artist';
        git3='https://www.behance.net/gallery/91461609/PS4-Controller';
        descr3 ='A illustration of a Playstation 4 Controller';
        tools3='Adobe Illustrator';
    }

    return(
        <div className='project'>
            <h2 className='projectTitle'>PROJECTS</h2>
            <Slider setChangeProjects={setChangeProjects}/>
            <div className='itemContainer'>
                <ProjectItem setPickProject={setPickProject} type={linkType} setShowProject={setShowProject} image={img1} projectName={pname1} projectRole={prole1} git={git1} descr={descr1} tools={tools1}/>
                <ProjectItem setPickProject={setPickProject} type={linkType} setShowProject={setShowProject} image={img2} projectName={pname2} projectRole={prole2} git={git2} descr={descr2} tools={tools2}/>
                <ProjectItem setPickProject={setPickProject} type={linkType} setShowProject={setShowProject} image={img3} projectName={pname3} projectRole={prole3} git={git3} descr={descr3} tools={tools3}/>
            </div>
        </div>
    )
}

export default Project;