import React from 'react';
import './projectItem.scss';

function ProjectItem({image, projectName, projectRole, git, descr}){
    return(
        <div className='container'>
            <img className='projectImg' src='' alt='image'/>
            <h3 className='projectName'>{projectName}</h3>
            <h3 className='projectRole'>{projectRole}</h3>
            <h3 className='github'>Github:</h3>
            <a href={git} className='githubLink'>{git}</a>
            <p className='projectDescr'>{descr}</p>
        </div>
    )
}

ProjectItem.defaultProps = {
    projectName: 'Project Name',
    projectRole: 'Project Role',
    git: 'github link',
    descr: 'description of project'
};

export default ProjectItem;