import React from 'react';
import {projects} from "@/data";
import {cn} from "@/utils/cn";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="section">
      <div className="container mb-10">
        <h2 className="mb-4">
          What I&#39;ve been working on
        </h2>
        <p className="leading-normal w-full lg:w-1/2 mb-4">
          Most of the projects I’ve worked on were either internal or short-term MVPs aimed at attracting investment, so they are not publicly accessible. However, I’m excited to share one public project along with a few personal side projects that reflect my skills and experience.
        </p>
      </div>
      <div className="w-layout-grid works-grid">
        {Object.values(projects).map(({ id, title, img, type, route }, idx) => (
          <div key={id} className={cn({"col-start-1 col-end-3 row-start-1 row-end-2": idx === 0, "col-start-3 row-start-1 row-end-2": idx === 1})}>
            <Link href={route} className="work-image" style={{ backgroundImage: `url(${img})` }} aria-label={title} />
            <div className="work-description">
              <Link href={route} aria-label={title} className="mb-[5px] text-[20px] leading-[34px] font-normal no-underline">{title}</Link>
              <div className="paragraph-light">{type}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
