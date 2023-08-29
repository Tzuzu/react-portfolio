import React from 'react'

const Project = ({ project }) => {
  return (
    <div className='col'>
        <div class="card">
  <img src={require(`../../assets/projects/${project.name}.jpg`)} 
  class="card-img" alt={project.name}/>
  <div class="card-img-overlay">
    <h5 class="card-title">
        <a href={project.link} className='card-text'>
            {project.name}
        </a>
        <a href={project.repo} className='card-text'>
            {/* <i className="fab fa-github"></i> */}
        </a>
    </h5>
    <p class="card-text">
        {project.description}
    </p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
    </div>
  )
}

export default Project