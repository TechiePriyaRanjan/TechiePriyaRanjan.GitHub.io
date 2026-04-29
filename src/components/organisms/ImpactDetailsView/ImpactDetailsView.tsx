import React from 'react';
import { Calendar, Image as ImageIcon, ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/atoms/Badge/Badge';
import { ImpactItem } from '@/lib/impact';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import ClientMotionWrapper from './ClientMotionWrapper';
import { Pre } from '@/components/mdx/Pre';
import rehypePrettyCode from 'rehype-pretty-code';
import BackToTop from '@/components/atoms/BackToTop/BackToTop';

const mdxComponents = {
  pre: Pre,
};

const rehypeOptions = {
  theme: 'github-dark-dimmed',
  keepBackground: true,
};

interface ImpactDetailsViewProps {
  item: ImpactItem;
}

const ImpactDetailsView: React.FC<ImpactDetailsViewProps> = ({ item }) => {
  return (
    <ClientMotionWrapper>
      <div className="pb-24">
        {/* Header / Back Button */}
        <div className="mb-10 flex justify-between items-center group border-t border-[var(--border-color)] pt-8">
          <Link href="/impact">
            <button
              className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-[3px] border border-[var(--border-color)] hover:border-[var(--text-color)]/50 text-[var(--text-color)] transition-all duration-300 group"
            >
              <ArrowLeft size={16} className="-translate-x-0 group-hover:-translate-x-1 transition-transform" />
              Back to Impact
            </button>
          </Link>

          {/* <Link href="/impact">
            <button
              className="flex items-center justify-center w-[34px] h-[34px] rounded-[3px] border border-[var(--border-color)] hover:border-[var(--text-color)]/50 text-[var(--text-color)] transition-all duration-300 group"
              aria-label="Back to Impact"
            >
              <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </Link> */}
        </div>

        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-4">
            <Badge>{item.category}</Badge>
            <div className="flex items-center gap-2 text-[11px] md:text-sm font-mono tracking-widest text-[var(--muted)] uppercase">
              <Calendar size={14} className="opacity-60" /> {item.date}
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-color)] mb-2">{item.title}</h2>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-[var(--text-color)] opacity-80 uppercase tracking-widest">
            <span>@ {item.organization}</span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="opacity-60" />
              {item.location}
            </span>
          </div>

          <div className="prose prose-invert max-w-none mt-4 text-lg leading-relaxed prose-p:my-6 prose-headings:text-[var(--text-color)] prose-headings:tracking-tight prose-a:text-emerald-500 hover:prose-a:text-emerald-400 prose-strong:text-[var(--text-color)] prose-code:text-emerald-300 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-[var(--border-color)]">
            <MDXRemote
              source={item.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
                },
              }}
            />
          </div>

          {/* Gallery Section */}
          {item.images && item.images.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-8 opacity-60">
                <ImageIcon size={18} />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em]">Event Gallery</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {item.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900 group"
                  >
                    <Image
                      src={img}
                      alt={`${item.title} gallery image ${idx + 1}`}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <BackToTop />
      </div>
    </ClientMotionWrapper>
  );
};

export default ImpactDetailsView;
