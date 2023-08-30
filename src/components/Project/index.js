import React from 'react'

const Project = ({ project }) => {
  return (
    <div className='col'>
      <h5>{project.name}</h5>
      <a href={project.link}>
        <div class="card">
          <img src={require(`../../assets/projects/${project.name}.jpg`)} 
          class="card-img" alt={project.name}/>
          </div>
        </a>
          <br></br>
          <div>
            <p class="card-text description">
                  {project.description}
            </p>
          </div>
    </div>
  )
}

export default Project