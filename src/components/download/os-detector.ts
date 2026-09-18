"use client";

import { useState, useEffect } from "react";

export type DetectedOS = "windows" | "macos" | "linux" | "unknown";

export function useDetectedOS(): DetectedOS {
  const [os, setOS] = useState<DetectedOS>("windows");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = (window.navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase() ||
      window.navigator.platform?.toLowerCase() ||
      "";

    if (userAgent.includes("win") || platform.includes("win")) {
      setOS("windows");
    } else if (userAgent.includes("mac") || platform.includes("mac") || platform.includes("iphone")) {
      setOS("macos");
    } else if (userAgent.includes("linux") || platform.includes("linux")) {
      setOS("linux");
    } else {
      setOS("windows");
    }
  }, []);

  return os;
}
