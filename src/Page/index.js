import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import './style.css'

const Page = ({currentPage}) => {
  const renderPage = (page) => {
    switch (page) {
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  }
  return <section className="container">
    <br></br>
    {renderPage(currentPage)}
    </section>
}

export default Page