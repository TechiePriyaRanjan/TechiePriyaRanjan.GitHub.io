'use client';

import HeroImage from '@/components/molecules/HeroImage/HeroImage';
import HeroHeadline from '@/components/molecules/HeroHeadline/HeroHeadline';
import HeroBio from '@/components/molecules/HeroBio/HeroBio';

const Hero = () => {
  return (
    <div className="relative z-0 w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-8 items-center pt-20 pb-12 lg:pt-24 lg:pb-24 max-w-7xl mx-auto">
      {/* Profile Image Column */}
      <HeroImage />

      {/* Text Content Column */}
      <div className="col-span-1 lg:col-span-8 flex flex-col order-2">
        <HeroHeadline />
        <HeroBio />
      </div>
    </div>
  );
};

export default Hero;