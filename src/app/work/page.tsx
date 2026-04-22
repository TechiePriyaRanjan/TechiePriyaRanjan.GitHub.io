'use client';

import PageLayout from '@/components/templates/PageLayout/PageLayout';
import WorkGrid from '@/components/organisms/WorkGrid/WorkGrid';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';

export default function WorkPage() {
  return (
    <PageLayout>
      <PageHeading
        pageName="SELECTED WORK"
        pageSubTitle="Projects"
        pageQuotation="A collection of open-source projects, tools, and technical experiments I&#39;ve built over the years."
      />
      <WorkGrid />
    </PageLayout>
  );
}
