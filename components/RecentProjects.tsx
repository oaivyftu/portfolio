'use client'

import React from 'react';
import {projects} from "@/data";
import {cn} from "@/utils/cn";
import {Link} from '@/i18n/navigation';
import {useLocale, useTranslations} from "next-intl";

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
          <div key={id} className={cn({"col-start-1 col-end-3 row-start-1 row-end-2": idx === 0, "col-start-3 row-start-1 row-end-2": idx === 1})}>
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
