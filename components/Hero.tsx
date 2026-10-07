import React from 'react';
import {useTranslations} from "next-intl";
import HeroReveal from "@/components/HeroReveal";
import {Link} from "@/i18n/navigation";

const Hero = () => {
  const t = useTranslations('hero');
  return (
    <>
      <HeroReveal />
      <div className="section hero-stage">
        <div className="container">
          <div className="mt-[80px] lg:mt-[100px] mb-[15px] md:mb-[30px]">
            <div className="accent-label hero-stage__name">{t('eyebrow')}</div>
            <h1 className="heading-jumbo mt-4 mb-6 max-w-[900px] hero-stage__role">{t('title')}</h1>
            <p className="paragraph-bigger paragraph-light max-w-[680px] mb-10 mx-auto md:mx-0 hero-stage__headline">{t('description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start hero-stage__headline">
              <a href="#contact" className="button button-large button-accent">{t('primaryCta')}</a>
              <Link href="/projects" className="button button-large button-outline">{t('secondaryCta')}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
