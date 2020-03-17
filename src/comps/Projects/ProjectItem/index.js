import React from 'react';
import './projectItem.scss';

function ProjectItem({type, image, projectName, projectRole, git, descr, tools, setShowProject={setShowProject}, setPickProject={setPickProject}}){

    var projectDisp = null

    if(projectName == 'Happihour'){
        projectDisp = 0;
    } else
    if(projectName == 'Dino-World'){
        projectDisp = 1;
    } else
    if(projectName == 'Pokemon TCG'){
        projectDisp = 2;
    } else
    if(projectName == 'Gandalf'){
        projectDisp = 3;
    } else
    if(projectName == 'Mecha Godzilla'){
        projectDisp = 4;
    } else
    if(projectName == 'PS4 Controller'){
        projectDisp = 5;
    }

    return(
        <div className='container'>
            <img onClick={()=>{setShowProject(true); setPickProject(projectDisp);}} className='projectImg' src={require('../../../imgs/'+image+'.png')} alt='project'/>
            <h3 onClick={()=>{setShowProject(true); setPickProject(projectDisp);}} className='projectName'>{projectName}</h3>
            <h3 className='projectRole'>{projectRole}</h3>
            <h4 className='projectTools'>Tools Used<br/><span className='tools'>{tools}</span></h4>
            <h3 className='github'>{type}</h3>
            <div className='link-container'>
                <a href={git} className='githubLink'>{git}</a>
            </div>
            <h3 className='github'>Description</h3>
            <p className='projectDescr'>{descr}</p>
            <h5 onClick={()=>{setShowProject(true); setPickProject(projectDisp);}}>Read More</h5>
        </div>
    )
}

ProjectItem.defaultProps = {
    projectName: 'Project Name',
    projectRole: 'Project Role',
    type:'Github',
    git: 'github link',
    descr: 'description of project'
};

export default ProjectItem;