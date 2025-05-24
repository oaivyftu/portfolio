import React from 'react';
import {workExperience} from "@/data";

const MyExperience = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="w-full lg:w-[70%] mb-[50px]">
          <h2>My experience</h2>
          <p className="paragraph-light">Over the past 7 years, I’ve worked as a frontend developer for international teams and large-scale projects in Europe and Asia. My experience spans industries like real estate, banking, and digital marketing — where I helped build performant, maintainable UIs and contributed to core architecture decisions. I thrive in cross-functional teams and love turning complex product requirements into smooth user experiences.</p>
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