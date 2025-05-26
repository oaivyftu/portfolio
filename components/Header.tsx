'use client'
import React, {useEffect, useRef, useState} from 'react';
import {ThemeToggle} from "@/components/ui/ThemeToggle";
import {cn} from "@/utils/cn";
import {useTheme} from "next-themes";
import {useTranslations, useLocale} from "next-intl";
import { usePathname, Link } from "@/i18n/navigation"
import Portal from "@/components/ui/Portal";

interface Position {
  left: number;
  top: number;
  center: number;
  width: number;
  height: number
}

const Header = ({ }) => {
  // ... các state và ref hiện tại ...
  const [menuPosition, setMenuPosition] = useState<Position | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const isActive = (href: string) => pathname === href;
  const [mounted, setMounted] = useState(false);
  const [openLocalMenu, setOpenLocalMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null); // thêm ref này
  useEffect(() => {
    setMounted(true);
  }, []);
  const locale = useLocale();
  const t = useTranslations('header');

  const handleLocaleMenuClick = () => {
    if (menuButtonRef.current) {
      const { left, top, width, height } = menuButtonRef.current.getBoundingClientRect();
      setMenuPosition({
        left,
        top,
        width,
        height,
        center: left + width / 2
      })
      if (!openLocalMenu) {
        setOpenLocalMenu(true)
      } else {
        setIsClosing(true)
        setTimeout(() => {
          setOpenLocalMenu(false)
          setIsClosing(false)
        }, 200)
      }

    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {setOpenLocalMenu(false)}
      if (openLocalMenu && menuButtonRef.current) {
        const { left, top, width, height } = menuButtonRef.current.getBoundingClientRect();
        setMenuPosition({
          left,
          top,
          width,
          height,
          center: left + width / 2
        })
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [openLocalMenu])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openLocalMenu &&
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          !menuButtonRef.current?.contains(event.target as Node)) {
        setIsClosing(true);
        setTimeout(() => {
          setOpenLocalMenu(false);
          setIsClosing(false);
        }, 200);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openLocalMenu]);

  return (
    <>
      {openLocalMenu && menuPosition && (
        <Portal>
          <div className="fixed w-full h-full inset-0 pointer-events-none">
            <div
              ref={menuRef} // Thêm ref này
              className={cn(
                "fixed pointer-events-auto",
                "will-change-transform transform transition-transform duration-200 ease-out"
              )}
              style={{
                top: `${menuPosition.top + menuPosition.height + 10}px`,
                transform: `translateX(${menuPosition.center-38}px)`,
                width: '76px',
                height: '114px',
                filter: "drop-shadow(0 1px 2px hsl(210deg 15% 6%/.1)) drop-shadow(0 2px 4px hsl(210deg 15% 6%/.1)) drop-shadow(0 8px 16px hsl(210deg 15% 6%/.1))"
              }}
            >
              <div className={cn("absolute inset-0 w-full h-full bg-white rounded-lg", {
                "animate-slide-in": openLocalMenu && !isClosing,
                "animate-slide-out": isClosing
              })}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="12"
                  viewBox="0 0 32 12"
                  className="fill-white absolute left-0 right-0 top-[-11.9px] mx-auto overflow-visible will-change-transform origin-[50%_100%] max-w-full"
                  style={{ viewTransitionName: "navigation-tip"}}>
                  <path d="
                    M 0 12
                    C 8 12
                      9.6 0
                      16 0
                    C 22.4 0
                      24 12
                      32 12
                    Z"></path>
                </svg>
                <div className={cn("absolute inset-0 ", {
                  "animate-fade-in": openLocalMenu && !isClosing,
                  "animate-fade-out": isClosing
                })}>
                  <ul>
                    <li><Link href="/" locale="en"
                              className={cn("navigation-item locale-nav-item", {"w--current": locale === "en"})}>EN</Link>
                    </li>
                    <li><Link href="/" locale="fr"
                              className={cn("navigation-item locale-nav-item", {"w--current": locale === "fr"})}>FR</Link>
                    </li>
                    <li><Link href="/" locale="vi"
                              className={cn("navigation-item locale-nav-item", {"w--current": locale === "vi"})}>VI</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
      <div className="sticky top-0 mx-auto px-[50px] py-[30px] w-full flex justify-between items-center bg-white dark:bg-black">
        <div className="logo" aria-label="Home">
          <Link href="/" className="uppercase text-[26px] leading-normal no-underline font-bold">vincent le</Link>
        </div>
        <nav role="navigation" className="mr-[-20px] items-center none hidden lg:flex">
          <ul className="flex justify-between items-center">
            <li className="relative">
              <button
                ref={menuButtonRef}
                className="uppercase navigation-item dark:text-white hover:opacity-90"
                onClick={handleLocaleMenuClick}>
                {locale}
              </button>
            </li>
            <li><Link href="/" className={cn("navigation-item", {"w--current": isActive("/")})}>{t('home')}</Link></li>
            <li><Link href="/about"
                      className={cn("navigation-item", {"w--current": isActive("/about")})}>{t('about')}</Link></li>
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
              <li><Link href="/" className={cn("navigation-item", { "w--current": isActive("/") })} >{t('home')}</Link></li>
              <li><Link href="/about" className={cn("navigation-item", { "w--current": isActive("/about") })}>{t('about')}</Link></li>
              <li><Link href="/" locale="en" className={cn("navigation-item", { "w--current": locale === "en"})}>EN</Link></li>
              <li><Link href="/" locale="fr" className={cn("navigation-item", { "w--current": locale === "fr"})}>FR</Link></li>
              <li><Link href="/" locale="vi" className={cn("navigation-item", { "w--current": locale === "vi"})}>VI</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;