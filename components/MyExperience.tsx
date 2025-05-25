import React from 'react';
import {workExperience} from "@/data";
import {useTranslations} from "next-intl";

const MyExperience = () => {
  const t = useTranslations('myExperiences');
  return (
    <div className="section">
      <div className="container">
        <div className="w-full lg:w-[70%] mb-[50px]">
          <h2>{t('title')}</h2>
          <p className="paragraph-light">{t('description')}</p>
        </div>
        <div className="w-layout-grid work-experience-grid work-experience-grid">
          {workExperience.map(({ company, position, period }, idx) => (
            <div key={idx}>
              <div className="mb-[10px] text-[20px] leading-[34px] font-normal">{company}</div>
              <div className="paragraph-light mb-[5px]">{position}</div>
              <div className="paragraph-tiny opacity-70">{period}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExperience;