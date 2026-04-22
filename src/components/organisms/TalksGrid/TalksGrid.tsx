import React from 'react';
import TalkCard, { TalkDataType } from '@/components/molecules/TalkCard/TalkCard';
import TalkListItem from '@/components/molecules/TalkCard/TalkListItem';

export const talksData: TalkDataType[] = [
  // {
  //   id: 1,
  //   title: 'Scaling Frontend Architectures for the Modern Web',
  //   tags: ['React', 'Architecture', 'Performance'],
  //   date: 'October 12, 2025',
  //   place: 'React India, Goa',
  //   slidesUrl: '#',
  //   githubUrl: '#',
  // },
  // {
  //   id: 2,
  //   title: 'The Editorial Aesthetic in UI Engineering',
  //   tags: ['Design Systems', 'CSS', 'Tailwind'],
  //   date: 'June 04, 2025',
  //   place: 'Design Systems Meetup, Bengaluru',
  //   slidesUrl: '#',
  //   githubUrl: '#',
  // },
  // {
  //   id: 3,
  //   title: 'State Management in 2025: What changed?',
  //   tags: ['Javascript', 'State', 'Hooks'],
  //   date: 'March 15, 2025',
  //   place: 'JSConf Asia',
  //   slidesUrl: '#',
  //   githubUrl: '#',
  // }
];

interface TalksGridProps {
  viewMode: 'grid' | 'list';
}

const TalksGrid: React.FC<TalksGridProps> = ({ viewMode }) => {
  if (!talksData || talksData.length === 0) {
    return (
      <div className="flex justify-center mt-12 mb-12 py-12 md:py-24 border border-dashed border-[var(--border-color)] rounded-xl">
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--muted)] tracking-tight">
          No talks available yet.
        </h2>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="flex flex-col mt-8 mb-12 border-t border-[var(--border-color)]">
        {talksData.map((talk, index) => (
          <TalkListItem key={talk.id} talk={talk} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 mb-12">
      {talksData.map((talk, index) => (
        <TalkCard key={talk.id} talk={talk} index={index} />
      ))}
    </div>
  );
};

export default TalksGrid;
