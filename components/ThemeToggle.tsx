"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("apex_ssc_theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && systemDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const id = requestAnimationFrame(() => {
      setMounted(true);
      setIsDark(shouldBeDark);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("apex_ssc_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("apex_ssc_theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle color theme"
      className="flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 shadow-xs cursor-pointer"
    >
      <span className="transform transition-transform duration-300 flex items-center justify-center">
        {mounted ? (
          isDark ? (
            <SunIcon size={18} className="text-amber-400" />
          ) : (
            <MoonIcon size={18} className="text-indigo-600" />
          )
        ) : (
          <span className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700" />
        )}
      </span>
    </button>
  );
}
