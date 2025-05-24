import React from 'react';
import {skills} from "@/data";

const Page = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="mt-[100px] mb-[140px] items-center w-layout-grid about-intro-grid">
            <div className="col-start-1 row-start-1 col-end-2 row-end-2">
              <div className="label opacity-60">Hey there!</div>
              <h2 className="mt-[10px] mb-[20px]">I&#39;m Vincent Le</h2>
              <p className="paragraph-light">With over 7 years of experience in frontend development, I specialize in building responsive websites and web apps using React, TailwindCSS, and modern web standards. I enjoy solving design challenges with clean code and great UX. My mission is to build interfaces that not only work flawlessly but also bring joy to users.</p>
            </div>
            <img src="/avatar_no_bg.png" className="col-start-2 col-end-3 grow-start-1 grow-end-2" alt="Vincent Le"/>
          </div>

        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-[10px]">
            <h3>My Career so far</h3>
            <p className="paragraph-light">
              Over the past 7 years, I’ve worked across startups and agencies, taking part in building marketing sites, e-commerce platforms, and complex web applications. I’ve collaborated with diverse teams and adapted quickly to different workflows, while maintaining a strong focus on frontend performance, accessibility, and user experience.
            </p>
          </div>
          <div className="max-w-full overflow-x-scroll md:overflow-hidden">
            <div className="w-layout-grid skills-grid items-center">
              {skills.map((skill, idx) => (
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