import gsap from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';
import { ArrowRight, Download, Globe, Instagram, Linkedin } from 'lucide-react';

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  useEffect(() => {
    gsap.from('.animate', {
      y: 50,
      opacity: 0,
      ease: 'power2.out',
      duration: 0.8,
      stagger: { amount: 0.3 }
    });
  }, []);

  return (
    <section className='relative bg-white overflow-visible' style={{
      height: 'calc(100vh - var(--navbar-height))',
      minHeight: '600px'
    }}>
      <div className='container mx-auto h-full flex items-center justify-between px-16 py-12 relative'>

        {/* Left Side - Content */}
        <div className='flex flex-col justify-center space-y-6 max-w-xl z-10'>

          {/* Under Construction Indicator */}
          <div style={{ display: 'flex', marginBottom: '0px' }}>
            <span className='pulsating__circles'></span>
            <span style={{ marginLeft: '20px', fontWeight: 700 }}> 🚧 Under Construction</span>
          </div>

          {/* Greeting */}
          <div className='animate inline-block'>
            <div className='px-0 py-0 inline-flex flex-col gap-0 items-start'>
              <span className='text-[32px] leading-tight text-gray-900 font-bold flex items-center'>
                Hey there,
                <div className="relative w-12 h-12 mx-2 group cursor-pointer">
                  <div className="group-hover:animate-wave group-hover:scale-125 transition-transform duration-300 origin-[70%_70%] will-change-transform">
                    <Image
                      src="/images/waving_hand.svg"
                      alt="Waving Hand"
                      width={48}
                      height={48}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </span>
              <span className='text-[32px] leading-tight text-gray-900 font-bold'>
                I&apos;m PriyaRanjan...
              </span>
            </div>
          </div>

          {/* Main Heading - Prevent text wrap on both lines */}
          <h1 className='animate text-[3.5rem] leading-[1.1] font-bold text-gray-900'>
            <span className='whitespace-nowrap'>Pragmatic Engineer</span><br />
            <span className='whitespace-nowrap'>Based in Bengaluru</span>
          </h1>

          {/* Description */}
          <p className='animate text-gray-600 text-base leading-relaxed max-w-md'>
            I&apos;m a UI/UX designer passionate about creating designs that not only meet the functional requirements but also delight users and evoke emotional connections.
          </p>

          {/* Action Buttons - No border radius */}
          <div className='animate flex items-center gap-4'>
            <button className='bg-gray-900 text-white px-6 py-3 flex items-center gap-2 hover:bg-gray-800 transition-colors'>
              Get In Touch
              <ArrowRight className='w-4 h-4' />
            </button>
            <button className='border-2 border-transparent text-gray-900 px-6 py-3 flex items-center gap-2 hover:border-gray-900 transition-colors'>
              Download CV
              <Download className='w-4 h-4' />
            </button>
          </div>

          {/* Social Links - All neutral, fill on hover */}
          <div className='animate flex items-center gap-4 pb-4'>
            <span className='text-sm text-gray-600'>Find me on:</span>
            <a href='#' className='w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all'>
              <Globe className='w-5 h-5' />
            </a>
            <a href='#' className='w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all'>
              <Instagram className='w-5 h-5' />
            </a>
            <a href='#' className='w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all'>
              <Linkedin className='w-5 h-5' />
            </a>
          </div>
        </div>

        {/* Right Side - Image with Decorative Elements */}
        <div className='relative flex items-center justify-end z-10 pr-8'>
          {/* Decorative green shapes */}
          <div className='absolute -bottom-20 -right-0 w-96 h-96 z-0'>
            <svg viewBox='0 0 400 400' className='w-full h-full'>
              {/* Top green shape */}
              <path
                d='M200,50 Q250,100 300,80 L350,120 Q320,180 280,160 Q240,140 200,180 Z'
                fill='#10B981'
                opacity='0.9'
              />
              {/* Bottom green shape */}
              <path
                d='M150,250 Q200,280 250,260 L300,300 Q280,360 240,350 Q180,340 150,370 Z'
                fill='#34D399'
                opacity='0.8'
              />
            </svg>
          </div>

          {/* Wave/Chart icon */}
          <div className='absolute top-16 -left-24 z-20'>
            <svg width='80' height='60' viewBox='0 0 80 60' fill='none'>
              <path d='M5 30 Q 20 10, 40 30 T 75 30' stroke='#1F2937' strokeWidth='3' fill='none' />
            </svg>
          </div>

          {/* Circular badge with arrow and circular text */}
          <div className='absolute -bottom-12 -left-48 z-20'>
            <svg width='144' height='144' viewBox='0 0 144 144' className='animate-spin-slow'>
              {/* Define the circular path for text - Reduced radius */}
              <defs>
                <path
                  id='circlePath'
                  d='M 72, 72 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0'
                />
              </defs>

              {/* Outer circle border - Reduced radius */}
              <circle cx='72' cy='72' r='50' fill='none' stroke='#1F2937' strokeWidth='2' />

              {/* Circular text following the path */}
              <text className='text-[0.6rem] font-semibold fill-gray-900 tracking-wider' style={{ letterSpacing: '0.10em' }}>
                <textPath href='#circlePath' startOffset='0%'>
                  scroll down • explore more • about me •
                </textPath>
              </text>

              {/* Center circle with arrow */}
              <g transform='translate(72, 72)'>
                <circle cx='0' cy='0' r='24' fill='#F3F4F6' />
                <path d='M0 -8 L0 8 M0 8 L-5 3 M0 8 L5 3' stroke='#1F2937' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' />
              </g>
            </svg>
          </div>

          {/* Person Image with border - NO border radius, taller/rectangular */}
          <div className='relative z-10 bg-gray-100 border-8 border-gray-900 overflow-hidden'>
            <Image
              src='/images/my_pic.png'
              height={650}
              width={360}
              alt='PriyaRanjan - Pragmatic Engineer'
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;