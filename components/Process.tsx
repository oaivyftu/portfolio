import React from 'react';
import {useTranslations} from "next-intl";
import {processKeys} from "@/data/site";

const Process = () => {
  const t = useTranslations('process');
  return (
    <div className="section anchor-section" id="process">
      <div className="container section-block">
        <div className="max-w-[720px] mb-12 mx-auto md:mx-0">
          <div className="accent-label">{t('label')}</div>
          <h2 className="mt-2 mb-4">{t('title')}</h2>
          <p className="paragraph-light">{t('description')}</p>
        </div>
        <ol className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-5">
          {processKeys.map((key, idx) => (
            <li key={key} className="border-t-2 border-solid border-accent pt-6 text-left">
              <div className="accent-label mb-3">{String(idx + 1).padStart(2, '0')}</div>
              <h4 className="mt-0 mb-3 text-[22px] leading-[32px] font-medium">{t(`steps.${key}.title`)}</h4>
              <p className="paragraph-light mb-0">{t(`steps.${key}.description`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Process;
