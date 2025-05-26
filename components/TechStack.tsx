"use client";
import React from "react";

export function TechStack() {
  return (
    <div className="py-6">
      <h2 className="heading mb-4">
        My Skills
      </h2>
      <p className="mb-4 leading-normal w-1/2">
        Here are skills I have accumulated during my bachelor degree, 7 years of Front-end development experience and 1 year of Network and Security Architecture post-graduate certificate:
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <ul className="flex-1 list-disc list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>LESS, SASS, SCSS</li>
          <li>Bootstrap</li>
          <li>Ant</li>
          <li>Responsive design</li>
          <li>UI Development</li>
          <li>WordPress</li>
          <li>SEO</li>
          <li>GitHub</li>
          <li>Version control systems</li>
        </ul>
        <ul className="flex-1 list-disc list-inside">
          <li>Javascript</li>
          <li>ECMAScript</li>
          <li>Typescript</li>
          <li>ReactJs</li>
          <li>Redux</li>
          <li>GraphQL</li>
          <li>Node.js</li>
          <li>REST</li>
          <li>MVC</li>
          <li>Unit testing</li>
          <li>CMS (Content Management Systems)</li>
          <li>jQuery</li>
        </ul>
        <ul className="flex-1 list-disc list-inside">
          <li>Git</li>
          <li>AWS</li>
          <li>Jira</li>
          <li>Scrum</li>
          <li>Agile</li>
          <li>Debugging</li>
          <li>AJAX</li>
          <li>Windows Server (Active Directory, GPO, client join domain)</li>
          <li>Teamwork</li>
          <li>Problem solving</li>
          <li>Critical thinking</li>
        </ul>
      </div>
    </div>
  );
}
