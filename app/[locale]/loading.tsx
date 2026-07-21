export default function Loading() {
  return (
    <main className="min-h-[60vh] px-4 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Hero skeleton */}
        <div className="mb-12 space-y-4 text-center">
          <div className="mx-auto h-10 w-3/5 animate-pulse rounded-2xl bg-slate-200/70" />
          <div className="mx-auto h-5 w-2/5 animate-pulse rounded-xl bg-slate-200/50" />
        </div>

        {/* Card grid skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="glass-panel space-y-4 rounded-3xl p-6"
            >
              <div className="h-5 w-2/3 animate-pulse rounded-lg bg-slate-200/70" />
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded-lg bg-slate-200/50" />
                <div className="h-4 w-4/5 animate-pulse rounded-lg bg-slate-200/40" />
              </div>
              <div className="h-9 w-1/3 animate-pulse rounded-full bg-slate-200/50" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
