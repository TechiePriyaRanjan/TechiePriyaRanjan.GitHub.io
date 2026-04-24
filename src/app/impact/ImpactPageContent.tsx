'use client';

import PageLayout from '@/components/templates/PageLayout/PageLayout';
import ImpactGrid from '@/components/organisms/ImpactGrid/ImpactGrid';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';
import { ImpactItem } from '@/lib/impact';

interface ImpactPageContentProps {
  items: ImpactItem[];
}

export default function ImpactPageContent({ items }: ImpactPageContentProps) {
  return (
    <PageLayout>
      <PageHeading
        pageName="IMPACT"
        pageSubTitle="Community & Growth"
        pageQuotation="Learning & giving back to the community through mentorship, volunteering, open source contributions, hackathon participation and organizing builder events."
      />
      <ImpactGrid items={items} />
    </PageLayout>
  );
}
