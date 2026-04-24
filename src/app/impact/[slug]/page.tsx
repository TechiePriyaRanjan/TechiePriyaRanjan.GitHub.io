import { notFound } from 'next/navigation';
import { getAllImpactItems, getImpactItemBySlug } from '@/lib/impact';
import PageLayout from '@/components/templates/PageLayout/PageLayout';
import ImpactDetailsView from '../../../components/organisms/ImpactDetailsView/ImpactDetailsView';

interface ImpactDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const items = await getAllImpactItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ImpactDetailPage({ params }: ImpactDetailPageProps) {
  const { slug } = await params;
  const item = await getImpactItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <PageLayout>
      <ImpactDetailsView item={item} />
    </PageLayout>
  );
}
