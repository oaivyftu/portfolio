"use client";

import React from 'react';
import Image from "next/image";

type HeadshotsProperties = JSX.IntrinsicElements["div"];

type Headshot = {
  coordinates: [number, number];
  transform: string;
};

const Headshots = (properties: HeadshotsProperties) => {
  return (
    <div {...properties}>
      <div className="overflow-hidden">
        <div className="relative aspect-[3/4]">
          <Image src="/headshots.webp" alt="Headshots image to see your cursor" className='w-[700%] absolute top-0 left-0 max-w-none' />
        </div>
      </div>
    </div>
  );
};

export default Headshots;