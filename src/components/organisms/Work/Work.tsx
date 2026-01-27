import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Project {
  title: string;
  category: string;
  image?: string;
  bgColor: string;
}

const projects: Project[] = [
  {
    title: 'Mobile App',
    category: 'App Design',
    image: '/images/next.svg', // placeholder
    bgColor: '#F0C14B'
  },
  {
    title: 'Portfolio Website',
    category: 'Web Design',
    bgColor: '#2D5F5D'
  },
  {
    title: 'Dashboard',
    category: 'UX/UI',
    bgColor: '#9CA3AF'
  }
];

const Work: React.FC = () => {
  return (
    <section className='bg-[#F5F5F0] py-20 px-8'>
      <div className='container mx-auto max-w-6xl'>
        <div className='flex justify-between items-center mb-12'>
          <h2 className='text-[3rem] font-bold text-[#1d1d1d]'>My Latest Works</h2>
          <Link
            href='#'
            className='text-[#D97757] hover:underline text-sm font-medium'
          >
            Update New Work →
          </Link>
        </div>

        <p className='text-[#666] mb-12 max-w-2xl'>
          Check out some of my latest creations
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer'
              style={{
                backgroundColor: project.bgColor,
                minHeight: '350px'
              }}
            >
              <div className='p-8 h-full flex flex-col justify-between'>
                <div>
                  <span className='inline-block bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-[#1d1d1d] mb-4'>
                    {project.category}
                  </span>
                </div>

                <div className='mt-auto'>
                  <h3 className='text-white text-2xl font-bold mb-2'>{project.title}</h3>

                  {/* Placeholder for project preview image */}
                  <div className='mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 h-32 flex items-center justify-center'>
                    <div className='text-white/50 text-sm'>Project Preview</div>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;