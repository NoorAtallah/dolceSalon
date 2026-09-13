"use client";

import { useCallback, useState } from "react";
import { MotionConfig } from "framer-motion";
import AccessibilityWidget from "./AccessibilityWidget";

/**
 * Wraps the app so "Pause Animations" can switch Framer Motion off globally
 * (CSS alone can't stop JS-driven motion), and mounts the widget itself.
 */
export default function A11yProvider({ children }) {
  const [paused, setPaused] = useState(false);
  const handleMotionChange = useCallback((v) => setPaused(Boolean(v)), []);

  return (
    <MotionConfig reducedMotion={paused ? "always" : "user"}>
      {children}
      <AccessibilityWidget onMotionChange={handleMotionChange} />
    </MotionConfig>
  );
}
