import React from 'react';
import {useTranslations} from "next-intl";
import {faqKeys} from "@/data/site";

const FAQ = () => {
  const t = useTranslations('faq');
  return (
    <div className="section anchor-section" id="faq">
      <div className="container section-block">
        <div className="max-w-[720px] mb-8 mx-auto md:mx-0">
          <div className="accent-label">{t('label')}</div>
          <h2 className="mt-2 mb-0">{t('title')}</h2>
        </div>
        <div className="max-w-[860px] border-t border-solid border-primary/10 dark:border-white/15 text-left">
          {faqKeys.map((key) => (
            <details key={key} className="faq-item border-b border-solid border-primary/10 dark:border-white/15">
              <summary>{t(`items.${key}.question`)}</summary>
              <p className="paragraph-light pb-6 pr-10 mb-0">{t(`items.${key}.answer`)}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
