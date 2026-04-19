import React from 'react';
import {useTranslations} from "next-intl";

const Footer = () => {
  const t = useTranslations('footer');
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center py-[40px] px-[50px]">
      <div className="mb-[15px] lg:mb-0">
        <p className="paragraph-light text-center lg:text-left">{t('copyright')}<strong> Vincent Le</strong>.</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:mr-[-20px] items-center ">
        <a href="https://www.linkedin.com/in/leoaivy/" className="mb-[15px] lg:mb-0 mx-[20px] opacity-60 text-[12px] leading-[20px] tracking-[1px] no-underline uppercase">linkedin</a>
      </div>
    </div>
  );
};

export default Footer;