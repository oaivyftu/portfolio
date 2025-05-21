"use client";
import React from "react";
import { Boxes } from "@/components/ui/BgBoxes";
import { cn } from "@/utils/cn";

export function TechStack() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 rounded-lg py-6 px-12">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mb-4")}>
        What I've been working on
      </h1>
      <p className="mb-4 relative z-20 leading-normal">

      </p>
    </div>
  );
}
