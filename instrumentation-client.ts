import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  // No tracing or replay — keeps client bundle small and stays inside free tier.
  tracesSampleRate: 0,
  replaysOnErrorSampleRate: 0,
  replaysSessionSampleRate: 0,
  debug: false,
  enabled: process.env.NODE_ENV === "production",
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
