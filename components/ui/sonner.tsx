"use client";

import { ComponentProps } from "react";
import { Toaster as Sonner } from "sonner";

// ShadcnUI-style Toaster wrapper around sonner. The site is light-mode only, so we
// skip the next-themes integration from the default shadcn snippet.
type ToasterProps = ComponentProps<typeof Sonner>;

export const Toaster = (props: ToasterProps) => {
  // `expand` keeps toasts in their full position instead of the collapsed stack
  // that reflows ("jumps") on hover — important since we show a single rich toast.
  return <Sonner position="bottom-right" expand {...props} />;
};
