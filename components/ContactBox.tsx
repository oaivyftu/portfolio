import React from 'react';
import {useTranslations} from "next-intl";
import {siteConfig} from "@/data/site";

const ContactBox = () => {
  const t = useTranslations('contact');
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(t('mailSubject'))}`;
  return (
    <div className="section anchor-section" id="contact">
      <div className="container">
        <div className="w-full lg:w-[80%] mx-auto my-[100px] lg:mt-[140px] lg:mb-[160px] text-center">
          <div className="accent-label">{t('label')}</div>
          <h2 className="mt-2 mb-4 text-[34px] leading-[46px] lg:text-[48px] lg:leading-[62px]">{t('title')}</h2>
          <p className="paragraph-light max-w-[600px] mx-auto">{t('description')}</p>
          <a href={mailto} className="button button-large button-accent mt-6 mb-8">{t('button')}</a>
          <a href={`mailto:${siteConfig.email}`} className="my-[10px] text-[24px] leading-[40px] lg:text-[40px] lg:leading-[56px] font-normal no-underline">{siteConfig.email}</a>
          <p className="paragraph-light paragraph-small mt-2">
            {t('secondary')}{' '}
            <a href={`mailto:${siteConfig.secondaryEmail}`} className="inline">{siteConfig.secondaryEmail}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
