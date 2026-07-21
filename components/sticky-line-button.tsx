import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

export function StickyLineButton({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex p-3 gap-2 bg-white/95 backdrop-blur-xl border-t border-slate-200 sm:hidden">
      <Link
        href={`tel:${companyBase.phone}`}
        data-analytics="phone_sticky_click"
        className="flex-1 flex items-center justify-center gap-2 rounded-full bg-sky-800 py-3.5 text-sm font-black text-white shadow-lg transition hover:bg-sky-700"
      >
        <Phone className="size-5" />
        {content.common.phone}
      </Link>
      <Link
        href={companyBase.lineUrl}
        data-analytics="line_sticky_click"
        className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#06C755] py-3.5 text-sm font-black text-white shadow-lg transition hover:bg-[#05b04c]"
      >
        <MessageCircle className="size-5" />
        {content.common.lineConsult}
      </Link>
    </div>
  );
}
