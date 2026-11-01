import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80">
          404 · PAGE NOT FOUND
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            Exam Page Not Found
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            The mock examination, syllabus module, or answer key you requested could not be located or has moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
          <Link
            href="/"
            className="w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/mock/1"
            className="w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Start Mock 1
          </Link>
        </div>
      </div>
    </div>
  );
}

