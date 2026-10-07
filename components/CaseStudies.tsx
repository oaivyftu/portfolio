import React from 'react';
import {useLocale, useTranslations} from "next-intl";
import {projects} from "@/data";
import {featuredProjectIds} from "@/data/site";
import {cn} from "@/utils/cn";
import {Link} from '@/i18n/navigation';
import type {MultiLang, Project} from "@/types";

const getProjectGridClassName = (idx: number) => {
  const isFirstProjectInRow = idx % 2 === 0
  const rowIndex = Math.floor(idx / 2)
  const isWideFirst = rowIndex % 2 === 0

  if (isFirstProjectInRow) {
    return isWideFirst ? "lg:col-span-2" : "lg:col-span-1"
  }

  return isWideFirst ? "lg:col-span-1" : "lg:col-span-2"
}

export const CaseStudyGrid = ({items}: { items: Project[] }) => {
  const locale = useLocale() as keyof MultiLang
  const t = useTranslations('caseStudies');
  return (
    <div className="w-layout-grid works-grid">
      {items.map(({id, title, img, kind, industry, route}, idx) => (
        <div key={id} className={cn(getProjectGridClassName(idx))}>
          <Link href={route} className="work-image" style={{backgroundImage: `url(${img})`}} aria-label={title} />
          <div className="work-description">
            <div className="accent-label mb-[5px]">
              {industry[locale]} · {kind === "delivered" ? t('delivered') : t('concept')}
            </div>
            <Link href={route} className="mb-[5px] text-[20px] leading-[34px] font-normal no-underline text-center">{title}</Link>
            <Link href={route} aria-label={title} className="text-[16px] leading-normal font-normal">{t('viewCase')}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const CaseStudies = () => {
  const t = useTranslations('caseStudies');
  const featured = featuredProjectIds.map((id) => projects[id]).filter(Boolean)
  return (
    <div className="section anchor-section" id="case-studies">
      <div className="container mt-[80px] lg:mt-[120px] mb-10">
        <div className="max-w-[720px] mx-auto md:mx-0">
          <div className="accent-label">{t('label')}</div>
          <h2 className="mt-2 mb-4">{t('title')}</h2>
          <p className="paragraph-light">{t('description')}</p>
        </div>
      </div>
      <CaseStudyGrid items={featured} />
      <div className="container mb-[40px] text-center md:text-left">
        <Link href="/projects" className="button button-large button-outline">{t('viewAll')}</Link>
      </div>
    </div>
  );
};

export default CaseStudies;
