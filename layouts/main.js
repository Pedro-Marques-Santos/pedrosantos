import { Sidebar } from "components";
import { ContentWrapper, Switch } from "ui";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function MainLayout({ children }) {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="flex items-start pt-[32px] md:pt-[56px] flex-col min-h-screen">
      <Sidebar />
      <main className="relative w-full">{children}</main>
      <footer className="w-full mt-auto pt-12">
        <ContentWrapper
          width="620px"
          className="border-t border-gray-500/10 py-3 flex justify-between items-center"
        >
          <div>
            <span className="text-sm opacity-60">Theme →</span>
            <div className="mx-2 bg-white dark:bg-[#111] border border-gray-200 rounded-lg cursor-pointer dark:border-gray-800 hover:border-gray-800 dark:hover:border-gray-300 inline-flex text-sm">
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

          <div className="flex flex-col gap-2">
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-sm opacity-60 hover:underline hover:opacity-100"
              >
                Github Source
              </button>

              {isOpen && (
                <div
                  className="absolute right-0 bottom-7 w-35 bg-white dark:bg-[#111] border border-gray-500 dark:border-gray-400 shadow-lg"
                >
                  <a
                    href="https://github.com/rishimohan/rishimohan.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-1 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    rishimohan.me
                  </a>
                  <a
                    href="https://github.com/Pedro-Marques-Santos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-1 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {process.env.NEXT_PUBLIC_ABREVIATEDUSERNAME}
                  </a>
                </div>
              )}
            </div>
          </div>
        </ContentWrapper>
      </footer>
    </section>
  );
}
