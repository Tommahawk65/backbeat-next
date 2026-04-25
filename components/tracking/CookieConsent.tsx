"use client";

import { useEffect } from "react";
import * as CC from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./cookieConsent.css";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsentUpdate() {
  const analytics = CC.acceptedCategory("analytics");
  const marketing = CC.acceptedCategory("marketing");
  window.gtag?.("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
}

export function CookieConsent() {
  useEffect(() => {
    document.documentElement.classList.add("cc--darkmode");

    CC.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom left",
          equalWeightButtons: false,
        },
        preferencesModal: { layout: "box" },
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {},
        marketing: {},
      },
      onFirstConsent: pushConsentUpdate,
      onConsent: pushConsentUpdate,
      onChange: pushConsentUpdate,
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                'We use cookies to measure traffic and improve your experience. Analytics and marketing cookies only run if you accept. See our <a href="/privacy" class="cc__link">privacy &amp; cookies policy</a>.',
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject",
              showPreferencesBtn: "Manage preferences",
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Strictly necessary",
                  description:
                    "Required for the site to function and cannot be switched off.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description:
                    "Help us understand how visitors use the site so we can improve it.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Used to measure ad performance and personalise ads on Facebook and Google.",
                  linkedCategory: "marketing",
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
