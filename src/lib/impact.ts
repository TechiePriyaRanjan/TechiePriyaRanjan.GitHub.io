import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

 
const impactDirectory = path.join(process.cwd(), 'src/data/impact');

export interface ImpactItem {
  id: string;
  slug: string;
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
  location: string;
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
    
    const trimmedContent = content.trim();
    return {
      id: slug,
      slug,
      content,
      title: data.title,
      organization: data.organization,
      date: data.date,
      category: data.category,
      description: data.description || trimmedContent.split('\n')[0] || '',
      location: data.location || 'Bengaluru',
      images: data.images || [],
    } as ImpactItem;
  });

  return allImpactData.sort((a, b) => {
    // Treat 'Present' as the most recent
    const aIsPresent = a.date.toLowerCase().includes('present');
    const bIsPresent = b.date.toLowerCase().includes('present');

    if (aIsPresent && !bIsPresent) return -1;
    if (!aIsPresent && bIsPresent) return 1;

    // Try to parse the date strings
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();

    if (!isNaN(aTime) && !isNaN(bTime)) {
      return bTime - aTime;
    }

    // Fallback: Extract the year using regex
    const aYear = parseInt(a.date.match(/\d{4}/)?.[0] || '0');
    const bYear = parseInt(b.date.match(/\d{4}/)?.[0] || '0');

    if (aYear !== bYear) {
      return bYear - aYear;
    }

    // Final fallback: alphabetical by title
    return a.title.localeCompare(b.title);
  });
}

export async function getImpactItemBySlug(slug: string): Promise<ImpactItem | null> {
  try {
    const fullPath = path.join(impactDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const trimmedContent = content.trim();
    return {
      id: slug,
      slug,
      content,
      title: data.title,
      organization: data.organization,
      date: data.date,
      category: data.category,
      description: data.description || trimmedContent.split('\n')[0] || '',
      location: data.location || 'Bengaluru',
      images: data.images || [],
    } as ImpactItem;
  } catch {
    return null;
  }
}
