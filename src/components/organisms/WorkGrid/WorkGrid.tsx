import React from 'react';
import WorkCard, { WorkProjectType } from '@/components/molecules/WorkCard/WorkCard';

export const workData: WorkProjectType[] = [
  // {
  //   id: 1,
  //   title: 'Fusion UI Library',
  //   description: 'A comprehensive, highly accessible React component library built with Radix primitives and Tailwind CSS.',
  //   tags: ['REACT', 'TYPESCRIPT', 'TAILWIND'],
  //   githubUrl: '#',
  //   demoUrl: '#',
  //   presentationUrl: '#',
  // },
  // {
  //   id: 2,
  //   title: 'Next.js Commerce Scale',
  //   description: 'High-performance headless e-commerce storefront handling 10k+ concurrent users with edge caching.',
  //   tags: ['NEXT.JS', 'GRAPHQL', 'REDIS'],
  //   githubUrl: '#',
  //   demoUrl: '#',
  // },
  // {
  //   id: 3,
  //   title: 'WebGL Data Viz Engine',
  //   description: 'Interactive data visualization tool for large-scale geographical datasets using Three.js.',
  //   tags: ['WEBGL', 'THREE.JS', 'D3'],
  //   githubUrl: '#',
  //   demoUrl: '#',
  //   presentationUrl: '#',
  // },
  // {
  //   id: 4,
  //   title: 'AI Prompt Orchestrator',
  //   description: 'Internal tool for managing, testing, and versioning complex LLM prompt chains in production.',
  //   tags: ['NODE.JS', 'OPENAI', 'REACT'],
  //   githubUrl: '#',
  //   demoUrl: '#',
  // },
  // {
  //   id: 5,
  //   title: 'Rust WebSocket Relay',
  //   description: 'A lightweight, massively concurrent WebSocket relay server written in Rust for real-time applications.',
  //   tags: ['RUST', 'WEBSOCKETS', 'TOKIO'],
  //   githubUrl: '#',
  // },
  // {
  //   id: 6,
  //   title: 'Editorial Blog Theme',
  //   description: 'A minimalist, typography-first Astro theme designed for technical writers and developers.',
  //   tags: ['ASTRO', 'CSS', 'VARIABLES'],
  //   githubUrl: '#',
  //   demoUrl: '#',
  // },
  // {
  //   id: 7,
  //   title: 'Developer CLI Toolbox',
  //   description: 'A suite of terminal commands for scaffoldings, code-mods, and automating redundant dev tasks.',
  //   tags: ['GO', 'CLI', 'BASH'],
  //   githubUrl: '#',
  // },
  // {
  //   id: 8,
  //   title: 'State Management Engine',
  //   description: 'An experimental, zero-dependency atomic state manager for React emphasizing fine-grained reactivity.',
  //   tags: ['REACT', 'STATE', 'EXPERIMENTAL'],
  //   githubUrl: '#',
  //   demoUrl: '#',
  // }
];

const WorkGrid = () => {
  if (!workData || workData.length === 0) {
    return (
      <div className="flex justify-center mt-8 mb-12 py-12 md:py-24 border border-dashed border-[var(--border-color)]">
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--muted)] tracking-tight">
          No projects available yet.
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-12">
      {workData.map((project, index) => (
        <WorkCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default WorkGrid;
