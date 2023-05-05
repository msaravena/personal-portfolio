import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I design intuitive and user-friendly interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>My approach focuses on simplicity, consistency, and accessibility.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I conduct user research and usability testing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I pay attention to details such as typography, color, and spacing to create a cohesive and polished design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I am always looking to learn and improve my design skills.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I am proficient in both front-end and back-end web development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I use modern web development technologies such as React and Node.js.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have experience in building responsive and mobile-first web applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I write clean and maintainable code, following industry best practices and standards.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I am always learning and exploring new technologies to improve my skills and stay up-to-date.</p>
            </li>            
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can create different types of content that people find interesting and helpful.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can write articles and create pictures and videos that people will enjoy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I use tools like Canva and Adobe Creative Suite to make my content look good.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I know how to make content show up high in Google search results.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I'm always learning about new ways to make better content that people will love.</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services