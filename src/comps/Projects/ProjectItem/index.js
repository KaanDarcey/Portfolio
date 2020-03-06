import React from 'react';
import './projectItem.scss';

function ProjectItem({type, image, projectName, projectRole, git, descr, tools, setShowProject={setShowProject}}){
    return(
        <div className='container'>
            <img onClick={()=>{setShowProject(true)}} className='projectImg' src={require('../../../imgs/'+image+'.png')} alt='project'/>
            <h3 onClick={()=>{setShowProject(true)}} className='projectName'>{projectName}</h3>
            <h3 className='projectRole'>{projectRole}</h3>
            <h4 className='projectTools'>Tools Used<br/><span className='tools'>{tools}</span></h4>
            <h3 className='github'>{type}</h3>
            <a href={git} className='githubLink'>{git}</a>
            <h3 className='github'>Description</h3>
            <p className='projectDescr'>{descr}</p>
            <h5 onClick={()=>{setShowProject(true)}}>Read More</h5>
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