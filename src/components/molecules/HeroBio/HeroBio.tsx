import SocialLinks from '@/components/atoms/SocialLinks/SocialLinks';

const HeroBio = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center lg:items-start mt-2 justify-center lg:justify-start">
      {/* Bio + Social Links */}
      <div className="max-w-xl flex flex-col gap-8 items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
        {/* Bio paragraph with decorative quote mark */}
        <div className="relative">
          {/* Decorative quotation SVG */}
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
        <div className="flex gap-4 items-center lg:items-start flex-col lg:flex-row">
          <div className="hidden lg:block h-[1px] w-8 md:w-12 bg-[var(--text-color)] mt-3 shrink-0 opacity-70" />
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            I try to share what I&apos;m learning by producing videos, giving talks, recording podcasts, &amp; making content.
          </p>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroBio;
