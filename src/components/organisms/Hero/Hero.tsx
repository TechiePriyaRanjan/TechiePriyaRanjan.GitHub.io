'use client';

import { motion } from 'motion/react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { WavingHand } from '@/components/WavingHand';
import Image from 'next/image';
import { useState } from 'react';

const scatteredSkills = [
  { src: '/images/skills/react.svg', x: -280, y: -180, rotate: -20, size: 70 },
  { src: '/images/skills/nextjs.svg', x: 250, y: -200, rotate: 15, size: 75 },
  { src: '/images/skills/javascript.svg', x: -350, y: 60, rotate: -10, size: 60 },
  { src: '/images/skills/figma.svg', x: 320, y: 80, rotate: 25, size: 65 },
  { src: '/images/skills/docker.svg', x: -180, y: 240, rotate: 15, size: 70 },
  { src: '/images/skills/git.svg', x: 220, y: 260, rotate: -15, size: 60 },
  { src: '/images/skills/html5.svg', x: -440, y: -80, rotate: -5, size: 65 },
  { src: '/images/skills/css3.svg', x: -680, y: -50, rotate: -20, size: 65 },
  { src: '/images/skills/graphql.svg', x: -400, y: 220, rotate: 30, size: 70 },
  { src: '/images/skills/redux.svg', x: 60, y: -240, rotate: -25, size: 70 },
  { src: '/images/skills/github.svg', x: 60, y: 80, rotate: 10, size: 55 },
  { src: '/images/skills/mysql.svg', x: -80, y: -85, rotate: -15, size: 75 },
  { src: '/images/skills/webpack.svg', x: 80, y: 250, rotate: 12, size: 60 },
  { src: '/images/skills/sass.svg', x: -120, y: 80, rotate: -22, size: 65 },
];

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 lg:py-24 max-w-7xl mx-auto">
      {/* Profile Image Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="col-span-1 lg:col-span-4 flex justify-center order-1"
      >
        <div className="flex items-end gap-2">
          {/* Vertical label — reads bottom-to-top, left of image */}
          <div className="self-end pb-1">
            <span
              className="text-[9px] uppercase font-bold tracking-[0.3em] text-[var(--muted)]"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Designer&nbsp;/&nbsp;Thinker&nbsp;/&nbsp;Maker
            </span>
          </div>

          <div className="relative group w-[100%] max-w-[300px] sm:max-w-sm md:max-w-[380px]">
            {/* Static Border that fades on hover */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[var(--border-color)] -z-20 translate-x-2 translate-y-2 group-hover:opacity-0 transition-opacity duration-500 rounded-sm" />

            {/* Animated Gradient Container */}
            <div className="relative p-[3px] z-0 rounded-sm">
              {/* Outline Draw SVG */}
              <svg
                className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="drawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4545" />
                    <stop offset="33%" stopColor="#00ff99" />
                    <stop offset="66%" stopColor="#006aff" />
                    <stop offset="100%" stopColor="#ff0095" />
                  </linearGradient>
                </defs>
                <rect
                  x="2.5" y="2.5"
                  style={{ width: 'calc(100% - 5px)', height: 'calc(100% - 5px)' }}
                  fill="none"
                  stroke="url(#drawGradient)"
                  strokeWidth="5"
                  rx="2"
                  pathLength="100"
                  strokeDasharray="106"
                  strokeDashoffset="106"
                  className="transition-all duration-[1200ms] ease-in-out group-hover:[stroke-dashoffset:0]"
                />
              </svg>

              {/* Image Inner Container */}
              <div className="relative w-full aspect-[4/5] bg-[var(--bg-color)] overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://priyaranjan.dev/images/my_pic.png"
                  alt="PriyaRanjan"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text Content Column */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="col-span-1 lg:col-span-8 flex flex-col order-2"
      >
        <div className="flex flex-col mb-8 mt-4 lg:mt-0">
          <span className="flex items-center text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[var(--text-color)]">
            Hey there, <WavingHand size={44} />
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] md:leading-tight tracking-tighter text-[var(--text-color)]">
            I&apos;m PriyaRanjan<span className="text-[var(--muted)]">,</span><br />
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] mt-2 opacity-90 relative">
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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1]"
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
                        alt="Skill Icon"
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
              <span className="relative group inline-block cursor-help transition-colors hover:text-emerald-500">
                Bengaluru
                {/* Image Popup */}
                <div className="absolute left-full top-1/2 ml-4 -translate-y-1/2 opacity-0 -translate-x-4 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 hidden sm:block">
                  <Image
                    src="/images/vidhana-soudha-bangalore.avif"
                    alt="Vidhana Soudha, Bengaluru"
                    width={200}
                    height={133}
                    className="w-48 min-w-[192px] h-auto rounded-lg border-2 border-[var(--border-color)] shadow-2xl"
                  />
                </div>
              </span>
            </span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mt-2">
          {/* Bio + Social Links */}
          <div className="max-w-xl flex flex-col gap-8">
            {/* Bio paragraph with decorative quote mark */}
            <div className="relative">
              {/* Decorative quotation SVG — rotated 0°, behind text */}
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 160 140"
                className="absolute -top-4 -left-6 w-48 h-40 opacity-[0.06] text-[var(--text-color)] pointer-events-none select-none"
                style={{ transform: 'rotate(0deg)', transformOrigin: 'top left' }}
                fill="currentColor"
              >
                <text
                  x="0"
                  y="130"
                  fontSize="180"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  fill="currentColor"
                >
                  &#8220;
                </text>
              </svg>

              <p className="relative text-lg md:text-xl leading-relaxed font-light text-[var(--text-color)] opacity-80 italic">
                I&apos;m a developer passionate about creating websites that not only meet the functional requirements but also delight users and evoke emotional connections.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="h-[1px] w-8 md:w-12 bg-[var(--text-color)] mt-3 shrink-0 opacity-70" />
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                I try to share what I&apos;m learning by producing videos, giving talks, recording podcasts, &amp; making content.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 mt-2 text-[10px] uppercase font-bold tracking-widest text-[var(--text-color)]">
              <a
                href="https://twitter.com/techiepriyarnjn"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                className="flex items-center gap-2 hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm"
              >
                <Twitter size={14} aria-hidden="true" /> Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/techiepriyaranjan/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm"
              >
                <Linkedin size={14} aria-hidden="true" /> LinkedIn
              </a>
              <a
                href="https://github.com/TechiePriyaRanjan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm"
              >
                <Github size={14} aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;