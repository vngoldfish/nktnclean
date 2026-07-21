"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="glass-panel mx-auto w-full max-w-md rounded-3xl p-10 text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-red-50">
          <AlertTriangle className="size-8 text-red-500" />
        </div>

        <h1 className="text-2xl font-black tracking-tight text-nktn-ink">
          エラーが発生しました
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-nktn-ink/60">
          申し訳ございません。予期しないエラーが発生しました。
        </p>

        {error.message && process.env.NODE_ENV === "development" && (
          <pre className="mt-4 overflow-auto rounded-xl bg-slate-100 p-3 text-left text-xs text-slate-600">
            {error.message}
          </pre>
        )}

        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-nktn-blue px-8 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-nktn-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nktn-blue focus-visible:ring-offset-2"
        >
          もう一度試す
        </button>
      </div>
    </main>
  );
}
