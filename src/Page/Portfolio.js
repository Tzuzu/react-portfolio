import React from 'react';
import Project from '../components/Project';
import { projects } from '../data';

const Portfolio = () => {
  return <div className='portfolio row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3'>{
  projects.map((project, i) => (
    <Project project={project} key={i}/>
  ))}</div>
}

export default Portfolio