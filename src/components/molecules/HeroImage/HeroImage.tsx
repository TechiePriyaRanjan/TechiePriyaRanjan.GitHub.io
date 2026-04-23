import { motion } from 'motion/react';
import Image from 'next/image';

const HeroImage = () => {
  return (
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
                x="2.5"
                y="2.5"
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
            <div className="relative w-full aspect-[4/5] bg-transparent overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 rounded-sm z-0">
              <Image
                src="https://priyaranjan.dev/images/my_pic.png"
                alt="PriyaRanjan Dubey — Software Engineer based in Bengaluru, India"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 300px"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
