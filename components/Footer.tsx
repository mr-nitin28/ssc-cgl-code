"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CompassIcon, BookOpenIcon, AwardIcon, ZapIcon } from "./icons";

export function Footer() {
  const pathname = usePathname();
  const isExamPage = pathname.startsWith("/mock/") && !pathname.endsWith("/key");

  if (isExamPage) {
    return null;
  }

  return (
    <footer className="border-t border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-950 text-slate-600 dark:text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-indigo-600 to-teal-400 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <CompassIcon size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100">
                Apex<span className="text-indigo-600 dark:text-indigo-400">SSC</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed font-normal">
              High-performance preparation architecture for SSC CGL 2026. Built with TCS-pattern timed mocks, 24-week strategic syllabuses, 36 speed-math mental triggers, and top-10 ranker playbooks.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Updated for Staff Selection Commission CGL 2026 Notification
            </div>
          </div>

          {/* Master Syllabuses */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-1.5">
              <BookOpenIcon size={14} className="text-indigo-600 dark:text-indigo-400" />
              Master Syllabuses
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/syllabus/maths" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  Mathematics (Tier-I & II)
                </Link>
              </li>
              <li>
                <Link href="/syllabus/reasoning" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  Reasoning & Intelligence
                </Link>
              </li>
              <li>
                <Link href="/syllabus/english" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  English Comprehension
                </Link>
              </li>
              <li>
                <Link href="/syllabus/gk" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  GK & Current Affairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Ranker Playbooks */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-1.5">
              <AwardIcon size={14} className="text-amber-500" />
              Topper Playbooks
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/tips/m" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  Maths Topper Playbook
                </Link>
              </li>
              <li>
                <Link href="/tips/r" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  Reasoning Speed Heuristics
                </Link>
              </li>
              <li>
                <Link href="/tips/e" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  English Accuracy Formula
                </Link>
              </li>
              <li>
                <Link href="/tips/k" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  GK Retention Engine
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice & Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-1.5">
              <ZapIcon size={14} className="text-teal-500" />
              Practice & Tools
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/pattern-lab" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  Speed Math Pattern Lab
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  80/20 Coverage Curve
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  Time-Budget Planner
                </Link>
              </li>
              <li>
                <Link href="/#mocks" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  All Full-Length Mocks
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
          <div>
            © 2026 ApexSSC Examination Architecture. Built for high-speed aspirants.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Tier-I Scheme: 100 Q · 200 Marks · 60 Min</span>
            <span>Marking: +2.0 / −0.50</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
