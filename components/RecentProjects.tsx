'use client'

import React from 'react';
import {projects} from "@/data";
import {cn} from "@/utils/cn";
import {Link} from '@/i18n/navigation';
import {useLocale, useTranslations} from "next-intl";

const getProjectGridClassName = (idx: number) => {
  const isFirstProjectInRow = idx % 2 === 0
  const rowIndex = Math.floor(idx / 2)
  const isWideFirst = rowIndex % 2 === 0

  if (isFirstProjectInRow) {
    return isWideFirst ? "lg:col-span-2" : "lg:col-span-1"
  }

  return isWideFirst ? "lg:col-span-1" : "lg:col-span-2"
}

const RecentProjects = () => {
  const locale = useLocale()
  const t = useTranslations('recentProjects');
  return (
    <div className="section">
      <div className="container mb-10">
        <h2 className="mb-4">
          {t('title')}
        </h2>
      </div>
      <div className="w-layout-grid works-grid">
        {Object.values(projects).map(({ id, title, img, type, route }, idx) => (
          <div key={id} className={cn(getProjectGridClassName(idx))}>
            <Link href={route} locale={locale} className="work-image" style={{ backgroundImage: `url(${img})` }} aria-label={title} />
            <div className="work-description">
              <Link href={route} locale={locale} aria-label={title} className="mb-[5px] text-[20px] leading-[34px] font-normal no-underline">{title}</Link>
              <div className="paragraph-light">{type}</div>
              <Link href={route} locale={locale} aria-label={title} className="text-[16px] leading-normal font-normal">{t('viewMore')}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
