import { useState, useRef, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "ui";
import {
  House,
  Note,
  BracketsCurly,
  ArrowSquareOut,
  At,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  X,
  CaretUp,
  Envelope,
} from "phosphor-react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const { pathname } = useRouter();
  const [mobileNav, showMobileNav] = useState(false);
  const { theme, setTheme } = useTheme();

  const SOCIAL_LINKS = [
    {
      title: "Email",
      url: "mailto:pedromarquesnoot@outlook.com",
      icon: <Envelope />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/pedromarquess0/",
      icon: <InstagramLogo />,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/pedromarques01/",
      icon: <LinkedinLogo />,
    },
    {
      title: "Github",
      url: "https://github.com/Pedro-Marques-Santos",
      icon: <GithubLogo />,
    },
  ];

  const LINKS = [
    {
      title: (
        <div className="md:w-5 md:h-5 flex items-center justify-center">
          <House size={16} className="hidden md:flex" />
          <span className="flex md:hidden">Home</span>
        </div>
      ),
      url: "/",
      icon: <House size={16} />,
      active: pathname === "/",
    },
    {
      title: "Blog",
      url: "/blog",
      icon: <Note size={16} />,
      active: pathname.includes("/blog"),
    },
    {
      title: "Projects",
      url: "/projects",
      icon: <BracketsCurly size={16} />,
      active: pathname.includes("/projects"),
    }
  ];

  const SOCIAL = [
    {
      title: "Github",
      url: `https://github.com/Pedro-Marques-Santos`,
      icon: <GithubLogo size={16} />,
      external: true,
    },
    {
      title: "Instagram",
      url: `https://instagram.com/${process.env.instagram}`,
      icon: <InstagramLogo size={16} />,
      external: true,
    },
    {
      title: "pedrosantos",
      url: `/`,
      icon: <At size={16} />,
      external: false,
    },
  ];

  const RenderLinks = ({ sectionTitle, sectionItems }) => {
    return (
      <>
        <div className="flex md:flex-row flex-col space-y-2 my-2 md:my-0 px-2 md:px-0 md:space-y-0 text-base md:text-sm">
          {sectionItems.map((link) => (
            <div className="px-1" key={link.title}>
              <Link
                href={link.url}
                target={link.external ? "_blank" : ""}
                className={clsx(
                  "flex items-center w-full py-[6px] md:py-[3px] px-[8px] transition-all duration-150 ease-in-out rounded-lg ",
                  link?.active
                    ? "bg-gray-200 dark:bg-gray-700 backdrop-blur-md"
                    : "text-gray-800 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
                )}
              >
                <span>{link?.title}</span>
                {link?.external ? (
                  <span className="ml-1 text-gray-400 dark:text-gray-600">
                    <ArrowSquareOut size={14} />
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderPrefs = () => {
    return (
      <div>
        <h4 className="px-4 mt-4 mb-2 text-gray-500">Theme</h4>
        <div className="mx-4 bg-white dark:bg-[#111] border border-gray-200 rounded-lg cursor-pointer dark:border-gray-800 hover:border-gray-800 dark:hover:border-gray-300">
          <select
            onChange={(e) => setTheme(e.target.value)}
            className="w-full bg-white dark:bg-[#111] outline-none appearance-none cursor-pointer py-1 px-2 rounded-lg"
            defaultValue={theme}
            placeholder="Select theme"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    );
  };

  const renderGithub = () => {

    return (
      <div className="relative" ref={dropdownRef}>
      <h4 className="px-4 mt-4 mb-2 text-gray-500">GitHub Source</h4>
      <div className="mx-4 bg-white dark:bg-[#111] border border-gray-200 rounded-lg cursor-pointer dark:border-gray-800 hover:border-gray-800 dark:hover:border-gray-300 relative">
        <button
          onClick={toggleDropdown}
          className="w-full text-left bg-white dark:bg-[#111] outline-none cursor-pointer py-1 px-2 rounded-lg flex justify-between items-center"
        >
          <span>Select version</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && (
            <div className="absolute z-10 w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-b-lg shadow-lg mt-1">
            <Link
              href="https://github.com/Pedro-Marques-Santos"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-2 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              My Version
            </Link>
            <Link
              href="https://github.com/rishimohan/rishimohan.me"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-2 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-b-lg"
              onClick={() => setIsOpen(false)}
            >
              Original Version
            </Link>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed w-full top-0 left-0 z-20 flex items-center justify-center bg-gradient-to-b from-white via-white dark:from-gray-900 dark:via-gray-900 -mx-2">
      <div className="max-w-[620px] w-full hidden md:flex">
        <aside className="sticky top-[30px] overflow-auto flex text-sm px-4 py-2 rounded-[12px] mt-2 w-full">
          <RenderLinks sectionItems={LINKS} />
          <div className="flex gap-3 items-center ml-auto">
            {SOCIAL_LINKS?.map((item) => (
              <Link
                className="text-lg opacity-50 hover:opacity-80"
                href={item?.url}
                target="_blank"
              >
                {item?.icon}
              </Link>
            ))}
          </div>
        </aside>
      </div>
      <div className="text-sm fixed left-0 bottom-0 py-2 px-4 rounded-full w-full md:hidden z-10 text-center flex items-center justify-center">
        {!mobileNav ? (
          <div className="grid grid-cols-2 gap-2 w-full">
            <Button
              as="a"
              href="/"
              variant="secondary"
              className="w-full !py-[12px] dark:!shadow-[0_0_20px_rgba(0,0,0,0.7)] shadow-[0_0_20px_rgba(0,0,0,0.1)] bg-white/70 backdrop-blur-md dark:bg-black/70"
            >
              <div className="flex items-center">
                <House className="mr-2" />
                Home
              </div>
            </Button>
            <Button
              variant="secondary"
              className="w-full !py-[12px] dark:!shadow-[0_0_20px_rgba(0,0,0,0.7)] shadow-[0_0_20px_rgba(0,0,0,0.1)] bg-white/70 backdrop-blur-md dark:bg-black/70"
              onClick={() => showMobileNav(!mobileNav)}
            >
              <div className="flex items-center">
                <CaretUp className="mr-2" />
                Menu
              </div>
            </Button>
          </div>
        ) : (
          "Close"
        )}
      </div>
      <AnimatePresence>
        {mobileNav ? (
          <nav className="fixed bottom-0 left-0 z-10 block w-full p-2 md:hidden h-full">
            {mobileNav ? (
              <div
                className="absolute inset-0 bg-black/20 dark:bg-black/50 w-full h-full "
                onClick={() => showMobileNav(false)}
              />
            ) : (
              ""
            )}

            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 200, transition: { duration: 0.1 } }}
              className="border border-b-0 border-gray-200 bg-white/90 backdrop-filter backdrop-blur dark:bg-gray-900/90 dark:border-gray-700 bottom-0 absolute left-0 w-full py-4 rounded-t-lg text-sm"
            >
              {mobileNav ? (
                <div>
                  <div onClick={() => showMobileNav(false)} className="">
                    <div className="absolute top-[-50px] right-[10px] z-20">
                      <Button
                        variant="secondary"
                        className="w-full !py-2"
                        onClick={() => showMobileNav(false)}
                      >
                        <X size={16} />
                      </Button>
                    </div>
                    <RenderLinks sectionItems={LINKS} />
                    <RenderLinks sectionItems={SOCIAL} sectionTitle="Social" />
                  </div>
                  {renderGithub()}
                  {renderPrefs()}
                </div>
              ) : (
                ""
              )}
            </motion.div>
          </nav>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
}
