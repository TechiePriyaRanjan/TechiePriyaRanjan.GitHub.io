import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// eslint-disable-next-line no-undef
const impactDirectory = path.join(process.cwd(), 'src/data/impact');

export interface ImpactItem {
  id: string;
  slug: string;
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
  images: string[];
  content: string;
}

export async function getAllImpactItems(): Promise<ImpactItem[]> {
  if (!fs.existsSync(impactDirectory)) return [];
  
  const fileNames = fs.readdirSync(impactDirectory);
  
  const allImpactData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(impactDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    return {
      id: slug,
      slug,
      content,
      title: data.title,
      organization: data.organization,
      date: data.date,
      category: data.category,
      description: content.split('\n')[0],
      images: data.images || [],
    } as ImpactItem;
  });

  return allImpactData;
}

export async function getImpactItemBySlug(slug: string): Promise<ImpactItem | null> {
  try {
    const fullPath = path.join(impactDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id: slug,
      slug,
      content,
      title: data.title,
      organization: data.organization,
      date: data.date,
      category: data.category,
      description: content.split('\n')[0],
      images: data.images || [],
    } as ImpactItem;
  } catch {
    return null;
  }
}
