import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { type Locale } from "@/lib/i18n";
import { companyBase, getContent } from "@/lib/site-data-i18n";

export function StickyLineButton({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <Link
      href={companyBase.lineUrl}
      aria-label={content.common.lineConsultLong}
      data-analytics="line_sticky_click"
      className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-2 rounded-full bg-nktn-green px-5 py-4 text-sm font-black text-white shadow-2xl ring-1 ring-white/40 transition hover:bg-[#438b62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nktn-blue focus-visible:ring-offset-2 sm:hidden"
    >
      <MessageCircle className="size-5" />
      {content.common.lineConsultLong}
    </Link>
  );
}
