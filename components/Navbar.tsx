"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import {
  CompassIcon,
  BookOpenIcon,
  AwardIcon,
  ZapIcon,
  BarChartIcon,
  TargetIcon,
  XIcon,
} from "./icons";

const navLinks = [
  { href: "/#mocks", label: "Mock Tests", icon: TargetIcon },
  { href: "/syllabus/maths", label: "Master Syllabus", icon: BookOpenIcon },
  { href: "/tips/m", label: "Topper Playbooks", icon: AwardIcon },
  { href: "/pattern-lab", label: "Pattern Lab", icon: ZapIcon },
  { href: "/tools", label: "Strategy Tools", icon: BarChartIcon },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isExamPage = pathname.startsWith("/mock/") && !pathname.endsWith("/key");

  // On active exam page, we keep the navbar ultra-minimal to prevent distraction
  if (isExamPage) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 via-indigo-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-indigo-500/35 transition-all duration-200">
                <CompassIcon size={20} className="stroke-[2.2]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 flex items-center gap-1">
                  Apex<span className="text-indigo-600 dark:text-indigo-400">SSC</span>
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 tracking-wide uppercase">
                  CGL 2026
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.split("#")[0]) && link.href !== "/";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-300 bg-indigo-50/90 dark:bg-indigo-950/60 font-semibold shadow-xs"
                      : "text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-indigo-600 dark:text-indigo-300" : "text-slate-500 dark:text-slate-400"} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/mock/1"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-sm shadow-indigo-600/25 hover:shadow-md hover:shadow-indigo-600/30 transition-all duration-200"
            >
              Start Mock 01
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XIcon size={20} /> : <CompassIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 px-4 pt-3 pb-5 space-y-1 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Icon size={18} className="text-indigo-600 dark:text-indigo-400" />
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/mock/1"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white"
            >
              Start Mock 01 (Free)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
