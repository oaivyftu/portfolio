import React from 'react';
import {useTranslations} from "next-intl";

const ContactBox = () => {
  const t = useTranslations('contactBox');
  return (
    <div className="section">
      <div className="container">
        <div className="w-full lg:w-[70%] mx-auto my-[120px] lg:mt-[140px] lg:mb-[200px] text-center">
          <h3>{t('title')}</h3>
          <p>{t('description')}</p>
          <a href="mailto:oaivyftu@gmail.com" className="my-[15px] text-[34px] leading-[52px] lg:text-[64px] lg:leading-[88px] font-normal no-underline">oaivyftu@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;