import React from 'react';
import {useTranslations} from "next-intl";
import HeroReveal from "@/components/HeroReveal";

const Hero = () => {
  const t = useTranslations('hero');
  return (
    <>
      <HeroReveal />
      <div className="section hero-stage">
        <div className="container">
          <div className="mt-[100px] mb-[15px] md:mb-[30px]">
            <div className="name-text hero-stage__name">
              Vincent Le
            </div>
            <div className="paragraph-light hero-stage__role">{t('role')}</div>
            <h1 className="heading-jumbo mb-10 hero-stage__headline">{t('description')}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
