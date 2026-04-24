import { WavingHand } from '@/components/WavingHand';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const scatteredSkills = [
  { src: '/images/skills/react.svg', name: 'React', x: -280, y: -180, rotate: -20, size: 70 },
  { src: '/images/skills/nextjs.svg', name: 'Next.js', x: 250, y: -200, rotate: 15, size: 75 },
  { src: '/images/skills/javascript.svg', name: 'JavaScript', x: -350, y: 60, rotate: -10, size: 60 },
  { src: '/images/skills/figma.svg', name: 'Figma', x: 320, y: 80, rotate: 25, size: 65 },
  { src: '/images/skills/docker.svg', name: 'Docker', x: -180, y: 240, rotate: 15, size: 70 },
  { src: '/images/skills/git.svg', name: 'Git', x: 220, y: 260, rotate: -15, size: 60 },
  { src: '/images/skills/html5.svg', name: 'HTML5', x: -440, y: -80, rotate: -5, size: 65 },
  { src: '/images/skills/css3.svg', name: 'CSS3', x: -680, y: -50, rotate: -20, size: 65 },
  { src: '/images/skills/graphql.svg', name: 'GraphQL', x: -400, y: 220, rotate: 30, size: 70 },
  { src: '/images/skills/redux.svg', name: 'Redux', x: 60, y: -240, rotate: -25, size: 70 },
  { src: '/images/skills/github.svg', name: 'GitHub', x: 60, y: 80, rotate: 10, size: 55 },
  { src: '/images/skills/mysql.svg', name: 'MySQL', x: -80, y: -85, rotate: -15, size: 75 },
  { src: '/images/skills/webpack.svg', name: 'Webpack', x: 80, y: 250, rotate: 12, size: 60 },
  { src: '/images/skills/sass.svg', name: 'Sass', x: -120, y: 80, rotate: -22, size: 65 },
];

const HeroHeadline = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col mb-4 md:mb-8 mt-0 lg:mt-0 text-center lg:text-left items-center lg:items-start">
      <span className="flex items-center justify-center lg:justify-start text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[var(--text-color)]">
        Hey there, <WavingHand size={44} />
      </span>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] md:leading-tight tracking-tighter text-[var(--text-color)]">
        I&apos;m PriyaRanjan<span className="text-[var(--muted)]">,</span><br />
        <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] mt-2 whitespace-nowrap leading-[1.4] tracking-normal md:tracking-tighter">
          a{' '}
          <span
            className="relative inline-block cursor-pointer text-[var(--neon-green)] transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Pragmatic Engineer
            {/* Scattered Skills Overlay */}
            {scatteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
                initial={{ x: 0, y: 0, rotate: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: isHovered ? skill.x : 0,
                  y: isHovered ? skill.y : 0,
                  rotate: isHovered ? skill.rotate : 0,
                  scale: isHovered ? 1 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  mass: 0.5,
                  delay: isHovered ? index * 0.04 : 0,
                }}
              >
                <div
                  className="rounded-2xl bg-white shadow-2xl flex items-center justify-center border border-gray-200"
                  style={{ width: skill.size, height: skill.size, padding: '12px' }}
                >
                  <Image
                    src={skill.src}
                    alt={`${skill.name} logo`}
                    width={skill.size}
                    height={skill.size}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </span>
          <br />
          based in{' '}
          <span className="relative z-50 group inline-block cursor-pointer transition-colors hover:text-emerald-500">
            Bengaluru
            {/* Image Popup - Desktop (pops to the right) */}
            <div className="absolute left-full top-1/2 ml-4 -translate-y-1/2 opacity-0 -translate-x-4 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 hidden sm:block">
              <Image
                src="/images/vidhana-soudha-bangalore.avif"
                alt="Vidhana Soudha, Bengaluru"
                width={200}
                height={133}
                className="w-48 min-w-[192px] h-auto rounded-lg border-2 border-[var(--border-color)] shadow-2xl"
              />
            </div>

            {/* Image Popup - Mobile (pops below) */}
            <div className="absolute top-full left-1/2 mt-2 -translate-x-1/2 opacity-0 -translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 block sm:hidden">
              <Image
                src="/images/vidhana-soudha-bangalore.avif"
                alt="Vidhana Soudha, Bengaluru"
                width={160}
                height={106}
                className="w-40 min-w-[160px] h-auto rounded-lg border-2 border-[var(--border-color)] shadow-2xl"
              />
            </div>
          </span>
        </span>
      </h1>
    </div>
  );
};

export default HeroHeadline;
