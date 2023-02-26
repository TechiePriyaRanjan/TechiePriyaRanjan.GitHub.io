import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './Work.scss'

function Work() {
  return (
    <section className='work'>
      <h1 className='section_title'>Works</h1>
      <div className="work_wrapper">
        <div className='work_description'>
          <div className='work__description--text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odit mollitia perspiciatis dicta illo vero accusamus iusto molestias et id
              voluptates saepe impedit est voluptatem architecto voluptas nesciunt,
              quam fugit! A.</p>
          </div>
          <div className='work__description--links'>
            <p>URL: <Link href='https://nextjs.org/docs/messages/next-image-unconfigured-host'>Live Preview</Link></p>
            <p>GitHub: <Link href='https://github.com/vercel/next.js'>Github Link</Link></p>
          </div>
        </div>
        <div className='work_image'>
          <Image
            className='banner_image'
            src='https://images.unsplash.com/photo-1607789377672-f6934b34c7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80'
            height="500"
            width="450"
            alt='my banner photo'
          />
        </div>
      </div>
    </section>
  )
}

export default Work