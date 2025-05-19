import React from 'react';
import {workExperience} from "@/data";

const Experience = () => {
  return (
    <div className="py-20 " id="clients">
      <h1 className="heading">
        My {' '}
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
