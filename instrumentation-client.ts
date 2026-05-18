import * as Sentry from "@sentry/nextjs";

// Defer Sentry init until after first paint to avoid blocking LCP.
// Server-side Sentry (which catches enquiry-form failures — the events that matter)
// is unaffected; this is purely the browser SDK.
function initSentry() {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 0,
    replaysOnErrorSampleRate: 0,
    replaysSessionSampleRate: 0,
    debug: false,
    enabled: process.env.NODE_ENV === "production",
    ignoreErrors: [
      "Non-Error promise rejection captured",
      /CustomEvent.*type=unhandledrejection/,
      "ResizeObserver loop completed with undelivered notifications",
      "ResizeObserver loop limit exceeded",
      "Network request failed",
      "Failed to fetch",
      "Load failed",
    ],
    denyUrls: [
      /^chrome-extension:\/\//i,
      /^moz-extension:\/\//i,
      /^safari-extension:\/\//i,
      /^safari-web-extension:\/\//i,
    ],
  });
}

if (typeof window !== "undefined") {
  const schedule =
    "requestIdleCallback" in window
      ? (cb: () => void) =>
          (window as Window & {
            requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void;
          }).requestIdleCallback(cb, { timeout: 3000 })
      : (cb: () => void) => window.setTimeout(cb, 2000);
  schedule(initSentry);
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
