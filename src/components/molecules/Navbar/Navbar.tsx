import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='flex justify-between items-center px-12 py-4 bg-[#F5F5F0]' style={{ height: 'var(--navbar-height)' }}>
      {/* Logo/Brand */}
      <div className='flex items-center gap-3'>
        <div className='w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center'>
          <svg width='20' height='20' viewBox='0 0 20 20' fill='white'>
            <path d='M10 2L3 7v6c0 3.5 2.5 6.5 7 8 4.5-1.5 7-4.5 7-8V7l-7-5z' />
          </svg>
        </div>
        <span className='text-xl font-bold text-gray-900'>PriyaRanjan</span>
      </div>

      {/* Navigation Links */}
      <div className='flex items-center gap-10'>
        <Link href='#' className='flex items-center gap-2 text-gray-900 font-medium hover:text-emerald-500 transition-colors'>
          <span className='w-2 h-2 rounded-full bg-emerald-500'></span>
          Home
        </Link>
        <Link href='#' className='text-gray-600 hover:text-gray-900 transition-colors'>
          About
        </Link>
        <Link href='#' className='text-gray-600 hover:text-gray-900 transition-colors'>
          Services
        </Link>
        <Link href='#' className='text-gray-600 hover:text-gray-900 transition-colors'>
          Projects
        </Link>
        <Link href='#' className='text-gray-600 hover:text-gray-900 transition-colors'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;