export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 space-y-4">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 animate-pulse" />
        <div className="absolute w-8 h-8 border-3 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin" />
      </div>
      <div className="text-center space-y-1">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          Loading Examination Platform...
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Preparing question banks, timing engine, and analytics
        </p>
      </div>
    </div>
  );
}
