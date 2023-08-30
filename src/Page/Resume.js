import React from 'react'

const Resume = () => {
  return <div className="resume">
    <p>
      Download my <a href="https://www.linkedin.com">resume</a>
    </p>
    <div className="row mt-5">
      <div className="col-10 col-md-5 d-flex flex-column align-items-center mb-5">
        <h3>Front-end Knowledge</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Bootstrap</li>
          <li class="list-group-item">CSS</li>
          <li class="list-group-item">HTML</li>
          <li class="list-group-item">Javascript</li>
          <li class="list-group-item">React</li>
        </ul>
      </div>
      <div className="col-10 col-md-5 d-flex flex-column align-items-center">
        <h3>Back-end Knowledge</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">API</li>
          <li class="list-group-item">Node</li>
          <li class="list-group-item">Express</li>
          <li class="list-group-item">MySQL</li>
          <li class="list-group-item">Mongoose, MongoDB</li>
        </ul>
      </div>
    </div>
  </div>
}

export default Resume