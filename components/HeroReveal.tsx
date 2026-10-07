"use client"

import {useEffect, useState} from "react";
import type {CSSProperties} from "react";
import {siteConfig} from "@/data/site";

const codeRows = [
  "const studio = ['strategy', 'design', 'engineering'];",
  "deploy({ quality: 'high', downtime: 0 });",
  "interface Product { shipped: boolean }",
  "render(<VincentStudio />);",
];

export default function HeroReveal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const forceReveal = new URLSearchParams(window.location.search).has("reveal");
    let hasPlayed = false;

    try {
      hasPlayed = sessionStorage.getItem("hero-reveal-played") === "true";
    } catch {
      hasPlayed = false;
    }

    if (hasPlayed && !forceReveal) {
      return;
    }

    try {
      sessionStorage.setItem("hero-reveal-played", "true");
    } catch {
      // Storage can be unavailable in private or embedded browser contexts.
    }

    setIsVisible(true);
    document.body.classList.add("is-hero-revealing");

    const timer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove("is-hero-revealing");
    }, 2600);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("is-hero-revealing");
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="hero-reveal" aria-hidden="true">
      <div className="hero-reveal__scan" />
      <div className="hero-reveal__mark">
        <span>{siteConfig.monogram}</span>
      </div>
      <div className="hero-reveal__code" aria-hidden="true">
        {codeRows.map((row, index) => (
          <span key={row} style={{"--row-index": index} as CSSProperties}>
            {row}
          </span>
        ))}
      </div>
      <div className="hero-reveal__panels">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
