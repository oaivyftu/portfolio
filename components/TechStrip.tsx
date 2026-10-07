import React from 'react';
import {useTranslations} from "next-intl";
import {techStack} from "@/data/site";

const TechStrip = () => {
  const t = useTranslations('tech');
  return (
    <div className="section">
      <div className="container">
        <div className="my-[60px] lg:my-[80px]">
          <p className="label opacity-60 mb-4">{t('label')}</p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2">
            {techStack.map((tech) => (
              <li key={tech} className="chip">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStrip;
