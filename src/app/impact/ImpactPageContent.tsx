'use client';

import PageLayout from '@/components/templates/PageLayout/PageLayout';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';
import ImpactGrid from '@/components/organisms/ImpactGrid/ImpactGrid';

export default function ImpactPageContent() {
  return (
    <PageLayout>
      <PageHeading
        pageName="IMPACT"
        pageSubTitle="Community & Growth"
        pageQuotation="Learning & giving back to the community through mentorship, volunteering, open source contributions, hackathon participation and organizing builder events."
      />
      <ImpactGrid />
    </PageLayout>
  );
}
