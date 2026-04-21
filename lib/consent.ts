"use client";

import { useEffect, useState } from "react";

export type ConsentValue = "accepted" | "rejected" | "unset";

const STORAGE_KEY = "backbeat.cookie-consent";
const EVENT_NAME = "backbeat:consentchange";

export function getStoredConsent(): ConsentValue {
  if (typeof window === "undefined") return "unset";
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return "unset";
}

export function setStoredConsent(value: Exclude<ConsentValue, "unset">) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }));
}

export function useConsent(): ConsentValue {
  const [consent, setConsent] = useState<ConsentValue>("unset");

  useEffect(() => {
    setConsent(getStoredConsent());
    const onChange = (e: Event) => {
      const value = (e as CustomEvent<ConsentValue>).detail;
      setConsent(value ?? getStoredConsent());
    };
    window.addEventListener(EVENT_NAME, onChange as EventListener);
    return () =>
      window.removeEventListener(EVENT_NAME, onChange as EventListener);
  }, []);

  return consent;
}
