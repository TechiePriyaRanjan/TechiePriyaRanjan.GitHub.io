import Link from 'next/link'
import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <footer className='d-flex space-between'>

      <nav>
        <ul>
          <li><Link href="https://www.linkedin.com/in/techiepriyaranjan/" target="_blank">Twiter</Link></li>
          <li><Link href="https://twitter.com/techiepriyarnjn" target="_blank">LinkedIn</Link></li>
        </ul>
      </nav>

      <div>
        <p className='copyright'>Last updated on <time dateTime='12.02.2023'>12.02.2023</time></p>
      </div>
    </footer>
  )
}

export default Footer