import React from 'react'
// I couldn't get this to work, but will attempt it later
// import { Link } from 'react-router-dom';

const Resume = () => {
  return <div className="resume">
    {/* I have commented this out as I do not have my linkedin profile completely figured, however I will uncomment this when I wish to enable it */}
    {/* <p>
      View my <a href="https://www.linkedin.com/user">resume</a>
    </p> */}
    <p>Throughout my bootcamp, I've been able to work on and learn both front-end and back-end code. These are some of the languages that I have learned and am now familiar with. If you haven't already, please check out my portfolio</p>
    <div className="row mt-5">
      <div className="col-10 col-md-5 d-flex flex-column align-items-center mb-5">
        <h3>Front-end</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Bootstrap</li>
          <li class="list-group-item">CSS</li>
          <li class="list-group-item">HTML</li>
          <li class="list-group-item">Javascript</li>
          <li class="list-group-item">React</li>
        </ul>
      </div>
      <div className="col-10 col-md-5 d-flex flex-column align-items-center">
        <h3>Back-end</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">API</li>
          <li class="list-group-item">GraphQL</li>
          <li class="list-group-item">MySQL</li>
          <li class="list-group-item">MongoDB</li>
          <li class="list-group-item">NodeJS</li>
        </ul>
      </div>
    </div>
  </div>
}

export default Resume