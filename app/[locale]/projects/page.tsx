import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {projects} from "@/data";
import {CaseStudyGrid} from "@/components/CaseStudies";

export async function generateMetadata({params}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'seo'});
  return {
    title: t('projectsTitle'),
    description: t('projectsDescription'),
    alternates: {canonical: `/${locale}/projects`},
  };
}

export default async function Page() {
  const t = await getTranslations('caseStudies');
  const all = Object.values(projects);
  const delivered = all.filter((p) => p.kind === "delivered");
  const concepts = all.filter((p) => p.kind === "concept");

  return (
    <>
      <div className="section">
        <div className="container mt-[80px] lg:mt-[100px] mb-12">
          <div className="accent-label">{t('label')}</div>
          <h1 className="heading-jumbo mb-4">{t('pageTitle')}</h1>
          <p className="paragraph-bigger paragraph-light max-w-[720px] mx-auto md:mx-0">{t('pageDescription')}</p>
        </div>
      </div>
      <div className="section">
        <div className="container mb-8">
          <h2 className="mb-0">{t('deliveredTitle')}</h2>
        </div>
        <CaseStudyGrid items={delivered} />
      </div>
      <div className="section">
        <div className="container mb-8">
          <h2 className="mb-2">{t('conceptTitle')}</h2>
          <p className="paragraph-light">{t('conceptDescription')}</p>
        </div>
        <CaseStudyGrid items={concepts} />
      </div>
    </>
  );
}
