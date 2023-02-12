import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import './Header.scss';

function Header() {

  useEffect(() => {
    gsap.from('.animate', {
      y: 200,
      ease: 'power2.in',
      duration: 1,
      stagger: {
        amount: 0.2,
      }
    });
    gsap.to('.animate', {
      y: 0,
      ease: 'power4.out',
      duration: 1,
      stagger: {
        amount: 0.2,
      }
    });
  }, [])

  return (
    <section className='section__container'>
      <div className='hero'>
        <div className="logo">
          <Link href="/">
            <Image src='/logo.png' alt='logo' height={150} width={250} />
          </Link>
        </div>

        <p className='animate hero__heading'>
          Hey, I&apos;m PriyaRanjan...
        </p>
        <p className='animate hero__subheading'>I am a pragmatic Frontend Developer <br />
          who has worked with multiple companies and businesses.<br /><br />
        </p>
        <button className='animate hero__connect'>
          <Link href="https://www.linkedin.com/in/techiepriyaranjan/" target="_blank">Let&apos;s connect!</Link>
        </button>
        <div style={{
          display: 'flex', marginTop: '70px'
        }}>
          <span className='pulsating__circles'></span>
          <span style={{ marginLeft: '20px', fontWeight: 700 }}> 🚧 Under Construction</span>
        </div>
      </div>
      <div className='image__container'>
        <div className="background"></div>
        <figure className='banner__image'>
          <picture>
            <source media='(min-width:1024px)' srcSet='my_photo.png' />
            <source media='(min-width:700px)' srcSet='my_photo.png' />
            <source media='(max-width: 699px)' srcSet='my_photo.png' />
            <img src="my_photo.png" alt="banner_photo_mine" />
          </picture>
        </figure>
      </div>

    </section>
  )
}

export default Header