import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-white py-20 px-8 border-t border-gray-200'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          {/* Left Side - CTA */}
          <div>
            <h2 className='text-[2.5rem] leading-tight font-bold text-[#1d1d1d] mb-6'>
              Let&apos;s make something<br />
              amazing together.
            </h2>
            <p className='text-lg text-[#666] mb-8'>
              Start by <span className='text-[#D97757] font-medium cursor-pointer hover:underline'>
                <a href='mailto:thepriyaranjan@gmail.com'>saying hi</a>
              </span>
            </p>

            {/* Signature */}
            <div className='mt-12'>
              <p className='font-bold text-xl text-[#1d1d1d]'>PriyaRanjan</p>
              <p className='text-sm text-[#666] mt-1'>
                © 2025. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className='grid grid-cols-2 gap-8'>
            {/* Information */}
            <div>
              <h3 className='text-sm font-bold text-[#1d1d1d] uppercase tracking-wide mb-4'>
                Information
              </h3>
              <ul className='space-y-3'>
                <li>
                  <Link href='#' className='text-[#666] hover:text-[#1d1d1d] transition-colors'>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-[#666] hover:text-[#1d1d1d] transition-colors'>
                    Work
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-[#666] hover:text-[#1d1d1d] transition-colors'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className='text-sm font-bold text-[#1d1d1d] uppercase tracking-wide mb-4'>
                Connect
              </h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='https://twitter.com/techiepriyarnjn'
                    target='_blank'
                    className='text-[#666] hover:text-[#1d1d1d] transition-colors'
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.linkedin.com/in/techiepriyaranjan/'
                    target='_blank'
                    className='text-[#666] hover:text-[#1d1d1d] transition-colors'
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://github.com/TechiePriyaRanjan'
                    target='_blank'
                    className='text-[#666] hover:text-[#1d1d1d] transition-colors'
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;