import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MARAVENA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/marcos.s.aravena" target='_blank' rel="noreferrer"><BsFacebook /></a>
        <a href="https://www.instagram.com/aravenap/" target='_blank' rel="noreferrer"><BsInstagram /></a>
        <a href="https://twitter.com/msaravena" target='_blank' rel="noreferrer"><GrTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MARAVENA DEV. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer