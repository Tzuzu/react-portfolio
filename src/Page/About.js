import React from 'react'
import logo from '../assets/images/logo.png'
import './style.css'

export const About = () => {
  return (
    <>
    <div className="about">
        <img src={logo} alt="Logo" className="logo"/>
        <p>Hello, my name is Fortunato Iodice and I'm currently 26 years old studying at the University of Arizona's coding bootcamp. Throughout the course of the last 6 months I've been learning and studying tons of different coding languages in order to become a full stack developer. There have been many challenges throughout this course but I'm very glad to say that doing this course has allowed me to find passion in places that before I would be too hesistant to try.
        </p>
        <p>Something that I have learned in this bootcamp is that collaboration is key, and that you shouldn't be afraid to ask questions or as for help from your peers, since they can do the same for you. Sometimes it is very hard to notice small mistakes when you look at your own code, since you wouldn't expect yourself to make that error, but throughout the course I've been able to collaborate with others in order to notice these small mistakes and I've been able to grow as a result of it.</p>
    </div>
  </>
)}

export default About