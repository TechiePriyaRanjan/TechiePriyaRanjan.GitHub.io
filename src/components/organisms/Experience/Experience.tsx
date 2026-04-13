import React from 'react';

interface Experience {
  period: string;
  location: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    period: '2023/03 – 02/2026',
    location: 'Bengaluru, India',
    role: 'Senior Software Engineer',
    company: 'Indium Software',
    description: 'Worked with Franklin Templeton as a consultant Engineer for their projects like Advisor Portal, Retirement Investment Options (RIO), GOE DemoUI, and GOE Digital Advisor.',
    highlights: [
      'Designed scalable frontend architecture for enterprise platforms used across multiple internal products.',
      'Collaborated with backend teams to integrate REST/ GraphQL services and ensure smooth data flow.',
      'Enforced code quality through reviews, linting, unit/ e2e tests, and performance monitoring.',
      'Mentored junior engineers and helped standardize UI and development workflows.'
    ],
    color: '#10B981' // green
  },
  {
    period: '2021/06 – 2022/12',
    location: 'Bengaluru, India',
    role: 'Associate Technology L2',
    company: 'Publicis Sapient',
    description: 'Worked with Barnes and Noble College (BNC) and The Children\'s Palace (TCP) clients.',
    highlights: [
      'Worked closely with product owners and designers to convert business requirements into technical UI solutions.',
      'Optimized application performance, accessibility, and mobile responsiveness.',
      'Followed TDD and component-based architecture to ensure maintainability.'
    ],
    color: '#F59E0B' // orange
  },
  {
    period: '2019/11 – 2021/06',
    location: 'Bengaluru, India',
    role: 'Software Engineer',
    company: 'Shenzyn (4GEN Technologies Pvt. Ltd.)',
    description: 'Worked with Shenzyn as a founding engineer — led frontend development, bootstrapped multiple app codebases.',
    highlights: [
      'Designed reusable frontend architecture and guided UI standards across multiple products.',
      'Collaborated with backend teams to design REST APIs and data models.'
    ],
    color: '#EAB308' // yellow
  },
  {
    period: '2017/08 – 2018/10',
    location: 'Patna, India',
    role: 'Software Developer',
    company: 'TechRevolution Services Pvt. Ltd.',
    description: 'Built and deployed multiple client websites using PHP, HTML5, CSS, MySQL, jQuery, and Bootstrap, and configured email.',
    highlights: [],
    color: '#3B82F6' // blue
  }
];

const Experience: React.FC = () => {
  return (
    <section className='bg-white py-20 px-8'>
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-[3rem] font-bold text-[#1d1d1d] mb-16'>My Work Experience</h2>

        <div className='space-y-12'>
          {experiences.map((exp, index) => (
            <div key={index} className='flex gap-8'>
              {/* Timeline Indicator */}
              <div className='flex flex-col items-center'>
                <div
                  className='w-4 h-4 rounded-full flex-shrink-0 mt-1'
                  style={{ backgroundColor: exp.color }}
                />
                {index !== experiences.length - 1 && (
                  <div className='w-0.5 h-full bg-gray-200 mt-2' />
                )}
              </div>

              {/* Content */}
              <div className='flex-1 pb-8'>
                <div className='mb-2'>
                  <p className='text-sm text-[#666] mb-1'>{exp.period}</p>
                  <p className='text-sm text-[#666] mb-3'>{exp.location}</p>
                </div>

                <h3 className='text-xl font-bold text-[#1d1d1d] mb-1'>{exp.role}</h3>
                <p className='text-lg text-[#2D5F5D] font-medium mb-3'>{exp.company}</p>

                <p className='text-[#444] mb-4 leading-relaxed'>{exp.description}</p>

                {exp.highlights.length > 0 && (
                  <ul className='space-y-2'>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className='flex items-start gap-2 text-[#444]'>
                        <span className='text-[#2D5F5D] mt-1.5 flex-shrink-0'>•</span>
                        <span className='leading-relaxed'>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;