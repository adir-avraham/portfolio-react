  
import React from 'react';
import ProjectsList from '../projects-list';
import { projects } from '../../data/projects';



export default function Portfolio() {
  
  return (
    <React.Fragment>
      <h2 className="titles">Portfolio</h2>
      <ProjectsList projects={projects}/>
    </React.Fragment>
  );

};