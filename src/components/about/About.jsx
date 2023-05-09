import React from 'react';
import './about.css';
import ME from '../../assets/Marcos-about.jpg';
import { IoSchoolOutline } from 'react-icons/io5';
import { BsPersonWorkspace } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <IoSchoolOutline className='about__icon'/>
              <h5>Academlo</h5>
              <small>Leading Tech School in LA</small>
            </article>

            <article className='about__card'>
              <BsPersonWorkspace className='about__icon'/>
              <h5>Training</h5>
              <small>400+ hrs</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>
          </div>

          <p>As a junior fullstack developer, I have a solid foundation in both front-end and back-end development, with experience in technologies such as HTML, CSS, JavaScript, Node.js, and React. I am passionate about building scalable and responsive web applications that provide a great user experience.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About