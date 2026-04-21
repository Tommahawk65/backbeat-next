"use client";

export const OPEN_ENQUIRY_EVENT = "backbeat:open-enquiry";

export function openEnquiryDialog() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_ENQUIRY_EVENT));
}
