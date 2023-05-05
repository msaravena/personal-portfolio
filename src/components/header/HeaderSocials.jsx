import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/marcos-aravena-9a257a15/" target='_blank'  rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/msaravena" target='_blank'  rel="noreferrer"><FaGithub /></a>
        <a href="https://www.facebook.com/marcos.s.aravena" target='_blank'  rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials