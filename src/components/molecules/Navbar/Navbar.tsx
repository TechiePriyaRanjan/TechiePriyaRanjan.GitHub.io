import Image from 'next/image';
import React from 'react';
import './Navbar.scss'

function Navbar() {
  return (
    <nav className='nav_container'>
      <Image
        className='banner_image'
        src='/images/logo.png'
        height="60"
        width="100"
        alt='logo'
      />

      <ul>
        <li>Home</li>
        <li>Work</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar