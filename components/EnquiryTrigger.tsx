"use client";

import type { ReactNode } from "react";

import { openEnquiryDialog } from "@/lib/enquiryDialog";

type Props = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

export function EnquiryTrigger({
  children,
  className,
  "aria-label": ariaLabel,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openEnquiryDialog();
      }}
      className={className}
      aria-haspopup="dialog"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
