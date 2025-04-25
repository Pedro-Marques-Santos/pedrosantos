"use client";

import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

const YearButton = ({ year, currentYear, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium ${
        year === currentYear
          ? "dark:bg-green-600 bg-green-600 dark:hover:border-transparent text-white hover:border-transparent"
          : "dark:bg-zinc-800 bg-zinc-50 dark:text-zinc-400 text-zinc-800"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
};

export default function ContributionGraph() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false); 
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const username = "Pedro-Marques-Santos";
  const joinYear = 2022;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!username || !joinYear) {
    return (
      <div className="text-center text-white">
        <h2>Error: Unable to load Contribution Graph</h2>
        <p>Ensure your GitHub username and join year are correctly set.</p>
      </div>
    );
  }

  const years = Array.from(
    { length: new Date().getFullYear() - joinYear + 1 },
    (_, index) => joinYear + index
  );

  const github = {
    dark: ["#1e242c", "#0e4429", "#006d32", "#26a641", "#39d353"],
    light: ["#EFEFEF", "#9be9a8", "#40c463", "#30a14e", "#2E7746"],
  };

  const theme = resolvedTheme === "dark" || resolvedTheme === "light" ? resolvedTheme : "light";

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row flex-col gap-4">
      <div
        className={`container-calendario ${
          theme === "dark" ? "dark" : "light"
        } dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit overflow-x-auto`}
      >
        <GitHubCalendar
          username={username}
          theme={github} 
          colorScheme={theme} 
          blockSize={14}
          year={calendarYear}
        />
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {years.slice(-5).reverse().map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear}
            onClick={() =>
              setCalendarYear((prevYear) => (prevYear === year ? undefined : year))
            }
          />
        ))}
      </div>
    </div>
  );
}