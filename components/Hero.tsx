import React from 'react';
import {useTranslations} from "next-intl";

const Hero = () => {
  const t = useTranslations('hero');
  return (
    <div className="section">
      <div className="container">
        <div className="mt-[100px] mb-[140px]">
          <div className="name-text">
            Vincent Le
          </div>
          <div className="paragraph-light">{t('role')}</div>
          <h1 className="heading-jumbo mb-10">{t('description')}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
