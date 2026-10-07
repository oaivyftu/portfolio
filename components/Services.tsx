import React from 'react';
import {useTranslations} from "next-intl";
import {serviceKeys} from "@/data/site";

const Services = () => {
  const t = useTranslations('services');
  return (
    <div className="section anchor-section" id="services">
      <div className="container section-block">
        <div className="max-w-[720px] mb-12 mx-auto md:mx-0">
          <div className="accent-label">{t('label')}</div>
          <h2 className="mt-2 mb-4">{t('title')}</h2>
          <p className="paragraph-light">{t('description')}</p>
        </div>
        <div className="card-grid">
          {serviceKeys.map((key, idx) => (
            <div key={key} className="card">
              <div className="accent-label mb-4">{String(idx + 1).padStart(2, '0')}</div>
              <h4 className="mt-0 mb-3 text-[22px] leading-[32px] font-medium">{t(`items.${key}.title`)}</h4>
              <p className="paragraph-light mb-0">{t(`items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
