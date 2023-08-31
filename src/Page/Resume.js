import React from 'react'
// I couldn't get this to work, but will attempt it later
// import { Link } from 'react-router-dom';

const Resume = () => {
  return <div className="resume">
    {/* I have commented this out as I do not have my linkedin profile completely figured, however I will uncomment this when I wish to enable it */}
    {/* <p>
      View my <a href="https://www.linkedin.com/user">resume</a>
    </p> */}
    <p>Throughout my bootcamp, I've been able to work on and learn both front-end and back-end code. These are some of the languages that I have learned and am now familiar with. If you haven't already, please check out my portfolio. Alternatively, if you wish to view each project that was assigned to each language, simply click on the name in the list below.</p>
    <div className="row mt-5">
      <div className="col-10 col-md-5 d-flex flex-column align-items-center mb-5">
        <h3>Front-end</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Bootstrap</li>
          <li class="list-group-item"><a href="https://github.com/Tzuzu/Portfolio">CSS</a></li>
          <li class="list-group-item"><a href="https://github.com/Tzuzu/horiseon">HTML</a></li>
          <li class="list-group-item"><a href="https://github.com/Tzuzu/Password-Generation">JavaScript</a></li>
          <li class="list-group-item"><a href="https://github.com/Tzuzu/react-portfolio">React</a></li>
        </ul>
      </div>
      <div className="col-10 col-md-5 d-flex flex-column align-items-center">
        <h3>Back-end</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><a href="https://github.com/Tzuzu/Weather-Application">APIs</a></li>
          <li class="list-group-item"><a href="https://github.com/Tzuzu/NoteTaking">ExpressJS</a></li>
          <li class="list-group-item"><a href="https://github.com/Tzuzu/Language-Learner">MySQL</a></li>
          <li class="list-group-item"><a href="https://github.com/Tzuzu/social-networking">MongoDB</a></li>
          <li class="list-group-item"><a href="https://github.com/Tzuzu/readme-generation">NodeJS</a></li>
        </ul>
      </div>
    </div>
  </div>
}

export default Resume