import React from 'react';
import {cn} from "@/utils/cn";

const Hamburger = ({isActive}: { isActive: boolean }) => {
  return (
    <div className={cn("hamburger-box", {"isActive": isActive})}>
      <div className="hamburger-inner"></div>
    </div>
  );
};

export default Hamburger;