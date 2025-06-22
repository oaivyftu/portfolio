"use client";

import React from 'react';
import {useTranslations} from "next-intl";
import Image from "next/image";


const Hero = () => {
  const t = useTranslations('hero');
  return (
    <div className="section">
      <div className="container">
        <div className="mt-[100px] mb-[80px] md:mb-[140px]">
          <div className="flex justify-between">
            <div className='flex-[2_1_0%]'>
              <div className="name-text">
                Vincent Le
              </div>
              <div className="paragraph-light">{t('role')}</div>
              <h1 className="heading-jumbo mb-10">{t('description')}</h1>
            </div>
            <div className="flex-1">
              <div className="overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <Image src="/headshots.webp" alt="Headshots image to see your cursor" className='w-[700%] absolute top-0 left-0 max-w-none' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
