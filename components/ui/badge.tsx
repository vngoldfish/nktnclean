import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-[0.08em] transition-colors focus:outline-none focus:ring-2 focus:ring-nktn-blue focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-cyan-50 text-nktn-blue ring-1 ring-cyan-100",
        blue: "bg-sky-50 text-nktn-blue ring-1 ring-sky-100",
        orange: "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
        dark: "bg-slate-900 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
