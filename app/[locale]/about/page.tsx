import React from 'react';
import {skills} from "@/data";
import {useTranslations} from "next-intl";

const Page = () => {
  const t = useTranslations('about');
  const s = useTranslations('mySkills')
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="mt-[100px] mb-[140px] items-center w-layout-grid about-intro-grid">
            <div className="col-start-1 row-start-1 col-end-2 row-end-2">
              <div className="label opacity-60">{t('label')}</div>
              <h2 className="mt-[10px] mb-[20px]">{t('title')}</h2>
              <p className="paragraph-light">{t('description')}</p>
            </div>
            <img src="/avatar_no_bg.png" className="col-start-2 col-end-3 grow-start-1 grow-end-2" alt="Vincent Le"/>
          </div>

        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-[10px]">
            <h3>{s('title')}</h3>
            <p className="paragraph-light">
              {s('description')}
            </p>
          </div>
          <div className="max-w-full overflow-x-scroll md:overflow-hidden">
            <div className="w-layout-grid skills-grid items-center">
              {skills.sort((a, b) => a.localeCompare(b)).map((skill, idx) => (
                <div className="opacity-60 text-[24px] leading-[42px] lg:text-[30px] lg:leading-[46px]" key={idx}>{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;