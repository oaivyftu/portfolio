import React from 'react';
import {Spotlight} from "@/components/ui/Spotlight";
import HeroText from "@/components/ui/HeroText";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="h-[500px] min-w-[50%]">
          <HeroText />
        </div>
        <section
          className="flex flex-col justify-center text-white text-xl px-6">
          <p className="mb-4">I’m Vincent, a trilingual (🇬🇧 English, 🇫🇷 French, 🇻🇳 Vietnamese) frontend engineer based in Ontario, Canada with 7 years of experience.</p>
          <p className="mb-4">
            As I’ve grown as a developer, I’ve worked with many other senior developers, technical leaders, designers and learnt many lessons for both technical and soft skills. Therefore, day by day, year by year, every line of my code was becoming better and better, more scalable, readable and maintainable. However, I know there are always rooms for me to study and grow.
          </p>
          <p>
            With my years of coding, mostly in frontend, I believe that I’ve built a strong skill to solve problems, communicate and self-study. I can work independently but also know how to work with the team.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Hero;
