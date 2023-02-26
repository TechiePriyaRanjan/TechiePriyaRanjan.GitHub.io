import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import './Hero.scss';

function Hero() {

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
    <>
      <section className='section__container'>
        <div className='hero'>
          <p className='animate hero__heading'>
            Hey there,
            <Image className='sayHiToVisitors' src='./images/waving_hand.svg' height={128} width={128} alt="Waving Hand Emoji" /> <br />
            I&apos;m PriyaRanjan...
          </p>
          <div className='animate profession_container'>
            <p className='hero__subheading'>I&apos;m a pragmatic</p>
            <div className='profession'>
              <span className=''>Frontend Developer 👨‍💻</span>
              <span className=''>Designer 🎨</span>
            </div>
            {/* <p>who has worked with multiple companies and businesses.</p> */}
          </div>
          {/* <button className='animate hero__connect'>
            <Link href="https://www.linkedin.com/in/techiepriyaranjan/" target="_blank">Let&apos;s connect!</Link>
          </button> */}

          <div style={{
            display: 'flex', marginTop: '70px'
          }}>
            <span className='pulsating__circles'></span>
            <span style={{ marginLeft: '20px', fontWeight: 700 }}> 🚧 Under Construction</span>
          </div>
        </div>

        <div className='image__container'>
          <Image className='banner_image' src='/images/PriyaRanjan.jpg' height="500" width="450" alt='my banner photo' />
          <div className="background"></div>
        </div>

      </section>
    </>
  )
}

export default Hero