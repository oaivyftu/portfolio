import React from 'react';
import type {Metadata} from "next";
import {useTranslations} from "next-intl";
import {getTranslations} from "next-intl/server";
import {aboutValueKeys, siteConfig, techStack} from "@/data/site";

export async function generateMetadata({params}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'seo'});
  return {
    title: t('aboutTitle'),
    description: t('aboutDescription'),
    alternates: {canonical: `/${locale}/about`},
  };
}

const Page = () => {
  const t = useTranslations('about');
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="mt-[80px] lg:mt-[100px] mb-[80px]">
            <div className="accent-label">{t('label')}</div>
            <h1 className="heading-jumbo mb-6 max-w-[900px]">{t('title')}</h1>
            <p className="paragraph-bigger paragraph-light max-w-[820px] mx-auto md:mx-0">{t('description')}</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-[100px] items-center w-layout-grid about-intro-grid">
            <div className="col-start-1 row-start-1 col-end-2 row-end-2">
              <img src="/avatar_no_bg.png" className="w-full max-w-[360px] mx-auto lg:max-w-full" alt={siteConfig.founder}/>
            </div>
            <div className="col-start-2 row-start-1 col-end-3 row-end-2">
              <div className="label opacity-60">{t('founder.label')}</div>
              <h2 className="mt-[10px] mb-[4px]">{t('founder.name')}</h2>
              <p className="accent-label mb-[20px]">{t('founder.role')}</p>
              <p className="paragraph-light">{t('founder.note')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container mb-[100px]">
          <h3 className="mb-8">{t('values.title')}</h3>
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
            {aboutValueKeys.map((key) => (
              <div key={key} className="card">
                <h4 className="mt-0 mb-3 text-[20px] leading-[30px] font-medium">{t(`values.items.${key}.title`)}</h4>
                <p className="paragraph-light mb-0">{t(`values.items.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container mb-[60px]">
          <h3>{t('stack.title')}</h3>
          <p className="paragraph-light mb-6">{t('stack.description')}</p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2">
            {techStack.map((tech) => (
              <li key={tech} className="chip">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
