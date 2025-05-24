'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {ThemeToggle} from "@/components/ui/ThemeToggle";
import {usePathname} from "next/navigation";
import {cn} from "@/utils/cn";
import {useTheme} from "next-themes";

const Header = ({  }) => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const isActive = (href: string) => pathname === href;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
      <div className="sticky top-0 mx-auto z-50 px-[50px] py-[30px] w-full flex justify-between items-center bg-white dark:bg-black">
        <div className="logo" aria-label="Home">
          <Link href="/" className="uppercase text-[26px] leading-normal no-underline font-bold">vincent le</Link>
        </div>
        <nav role="navigation" className="mr-[-20px] items-center none hidden lg:flex">
          <ul className="flex justify-between items-center">
            <li><Link href="/" className={cn("navigation-item", { "w--current": isActive("/") })} >Home</Link></li>
            <li><Link href="/about" className={cn("navigation-item", { "w--current": isActive("/about") })}>About</Link></li>
            <li><ThemeToggle /></li>
          </ul>
        </nav>
        <div className="lg:hidden flex gap-6 items-center">
          <ThemeToggle />
          <div className="w-[40px] h-[40px] inline-flex justify-center items-center mr-[-9px]" onClick={() => setOpenMenu(!isOpenMenu)}>
            {mounted && <img src={theme === "light" ? "/menu_icon.png" : "/menu_icon_dark.png"} alt="Menu icon" className="w-[22px]" />}
          </div>
        </div>
        <div className={cn("absolute overflow-hidden top-[100%] left-0 right-0 h-[calc(100vh-100px)] opacity-0 pointer-events-none", {"opacity-1 pointer-events-auto": isOpenMenu})} onClick={() => setOpenMenu(!isOpenMenu)}>
          <nav role="navigation" className={cn("bg-white dark:bg-black translate-y-[-100%] transition-transform duration-[400ms]", { "translate-y-0": isOpenMenu },)}>
            <ul>
              <li><Link href="/" className={cn("navigation-item", { "w--current": isActive("/") })} >Home</Link></li>
              <li><Link href="/about" className={cn("navigation-item", { "w--current": isActive("/about") })}>About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
  );
};

export default Header;