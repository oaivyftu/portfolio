import React from 'react';
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import {serviceKeys, siteConfig} from "@/data/site";

const linkClass = "opacity-60 no-underline text-[14px] leading-[26px] hover:opacity-100";

const Footer = () => {
  const t = useTranslations('footer');
  const s = useTranslations('services.items');
  const h = useTranslations('header');
  return (
    <footer className="border-t border-solid border-primary/10 dark:border-white/15 py-[50px] px-[30px] lg:px-[50px]">
      <div className="grid grid-cols-1 gap-10 text-center md:text-left md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1.5fr]">
        <div>
          <div className="uppercase text-[20px] leading-normal font-bold mb-3">{siteConfig.name}</div>
          <p className="paragraph-light paragraph-small max-w-[320px] mx-auto md:mx-0">{t('description')}</p>
        </div>
        <div>
          <div className="label opacity-60 mb-3">{t('servicesTitle')}</div>
          <ul>
            {serviceKeys.map((key) => (
              <li key={key}><Link href="/#services" className={linkClass}>{s(`${key}.title`)}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="label opacity-60 mb-3">{t('companyTitle')}</div>
          <ul>
            <li><Link href="/about" className={linkClass}>{h('about')}</Link></li>
            <li><Link href="/projects" className={linkClass}>{h('caseStudies')}</Link></li>
            <li><Link href="/#process" className={linkClass}>{h('process')}</Link></li>
          </ul>
        </div>
        <div>
          <div className="label opacity-60 mb-3">{t('contactTitle')}</div>
          <ul>
            <li><a href={`mailto:${siteConfig.email}`} className={linkClass}>{siteConfig.email}</a></li>
            <li><a href={`mailto:${siteConfig.secondaryEmail}`} className={linkClass}>{siteConfig.secondaryEmail}</a></li>
            <li><a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <p className="paragraph-light paragraph-small text-center md:text-left mt-12 mb-0">
        © {new Date().getFullYear()} {siteConfig.name}. {t('rights')}
      </p>
    </footer>
  );
};

export default Footer;
