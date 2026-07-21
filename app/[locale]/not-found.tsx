import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="glass-panel mx-auto w-full max-w-md rounded-3xl p-10 text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-sky-50">
          <SearchX className="size-8 text-sky-800" />
        </div>

        <p className="text-5xl font-black tracking-tight text-nktn-ink">404</p>

        <h1 className="mt-2 text-lg font-bold text-nktn-ink/80">
          ページが見つかりません
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-nktn-ink/60">
          お探しのページは存在しないか、移動した可能性があります。
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-800 px-8 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800 focus-visible:ring-offset-2"
        >
          ホームに戻る
        </Link>
      </div>
    </main>
  );
}
