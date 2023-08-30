import React from 'react'

const Project = ({ project }) => {
  return (
    <div className='col'>
      <a href={project.link}>
        <div class="card">
          <img src={require(`../../assets/projects/${project.name}.jpg`)} 
          class="card-img" alt={project.name}/>
          <div class="card-img-overlay image">
            <h5 class="card-title">
                <a href={project.link} className='card-text'>
                    {project.name}
                </a>
                <a href={project.repo} className='card-text'>
                </a>
            </h5>
          </div>
          <div>
            <p class="card-text description">
                  {project.description}
            </p>
          </div>
        </div>
        </a>
    </div>
  )
}

export default Project