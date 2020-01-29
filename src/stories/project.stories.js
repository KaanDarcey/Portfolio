import React from 'react';
import Project from '../comps/Projects';
import ProjectItem from '../comps/Projects/ProjectItem';

export default {
    title: 'Project',
    component: Project,
  };
  
  export const DefaultProject = () => {
      return <Project />
  }

  export const DefaultProjectItem = () => {
    return <ProjectItem />
}