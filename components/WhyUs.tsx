import React from 'react';
import {useTranslations} from "next-intl";
import {whyUsPointKeys, whyUsStatKeys} from "@/data/site";

const WhyUs = () => {
  const t = useTranslations('whyUs');
  return (
    <div className="section">
      <div className="container section-block">
        <div className="max-w-[720px] mb-12 mx-auto md:mx-0">
          <div className="accent-label">{t('label')}</div>
          <h2 className="mt-2 mb-4">{t('title')}</h2>
          <p className="paragraph-light">{t('description')}</p>
        </div>
        <dl className="grid grid-cols-2 gap-[24px] lg:grid-cols-4 mb-16">
          {whyUsStatKeys.map((key) => (
            <div key={key} className="text-left">
              <dt className="text-accent text-[40px] leading-[52px] lg:text-[52px] lg:leading-[64px] font-semibold">{t(`stats.${key}.value`)}</dt>
              <dd className="paragraph-light paragraph-small m-0">{t(`stats.${key}.label`)}</dd>
            </div>
          ))}
        </dl>
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
          {whyUsPointKeys.map((key) => (
            <div key={key} className="card">
              <h4 className="mt-0 mb-3 text-[20px] leading-[30px] font-medium">{t(`points.${key}.title`)}</h4>
              <p className="paragraph-light mb-0">{t(`points.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
