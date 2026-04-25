"use client";

import { useEffect, useState } from "react";
import * as CC from "vanilla-cookieconsent";

export function useMarketingConsent() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const update = () => setGranted(CC.acceptedCategory("marketing"));
    update();
    document.addEventListener("cc:onConsent", update);
    document.addEventListener("cc:onChange", update);
    return () => {
      document.removeEventListener("cc:onConsent", update);
      document.removeEventListener("cc:onChange", update);
    };
  }, []);

  return granted;
}
