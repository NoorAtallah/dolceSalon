"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlignLeft,
  Contrast,
  Droplet,
  Eye,
  ImageOff,
  Info,
  Link2,
  MousePointer2,
  PauseCircle,
  PersonStanding,
  RotateCcw,
  StretchHorizontal,
  Type,
  UnfoldVertical,
  X,
} from "lucide-react";

const STORAGE_KEY = "dolce-a11y";

const DEFAULTS = {
  contrast: 0, // 0 off | 1 invert | 2 dark | 3 light
  links: false,
  fontscale: 0, // 0..3
  spacing: 0, // 0..3
  motion: false, // paused
  images: false, // hidden
  dyslexic: false,
  cursor: false, // big
  tooltips: false,
  lineheight: 0, // 0..3
  align: 0, // 0 off | 1 left | 2 center | 3 right
  saturation: 0, // 0 off | 1 low | 2 high | 3 mono
  oversized: false,
};

const CONTRAST = [null, "invert", "dark", "light"];
const ALIGN = [null, "left", "center", "right"];
const SATURATION = [null, "low", "high", "mono"];

/* Write the state onto <html> as data-attributes that a11y.css reacts to. */
function applyToDom(s) {
  const el = document.documentElement;
  const set = (name, value) => {
    if (value === null || value === false || value === 0) el.removeAttribute(name);
    else el.setAttribute(name, String(value));
  };

  set("data-a11y-contrast", CONTRAST[s.contrast]);
  set("data-a11y-align", ALIGN[s.align]);
  set("data-a11y-saturation", SATURATION[s.saturation]);
  set("data-a11y-fontscale", s.fontscale);
  set("data-a11y-spacing", s.spacing);
  set("data-a11y-lineheight", s.lineheight);
  set("data-a11y-links", s.links ? "on" : null);
  set("data-a11y-motion", s.motion ? "paused" : null);
  set("data-a11y-images", s.images ? "hidden" : null);
  set("data-a11y-dyslexic", s.dyslexic ? "on" : null);
  set("data-a11y-cursor", s.cursor ? "big" : null);
}

/* ---------------------------------------------------------------- tooltips */
function useTooltips(enabled) {
  const [tip, setTip] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setTip(null);
      return;
    }
    const label = (el) =>
      el.getAttribute("aria-label") ||
      el.getAttribute("title") ||
      el.getAttribute("alt") ||
      (el.tagName === "IMG" ? el.getAttribute("alt") : null) ||
      (el.tagName === "A" || el.tagName === "BUTTON"
        ? el.textContent.trim().slice(0, 120)
        : null);

    const onOver = (e) => {
      const el = e.target.closest?.("a,button,img,[aria-label],[title],input,summary");
      if (!el || el.closest(".a11y-ui")) return setTip(null);
      const text = label(el);
      if (!text) return setTip(null);
      const r = el.getBoundingClientRect();
      setTip({ text, x: Math.min(r.left, window.innerWidth - 300), y: r.bottom + 8 });
    };
    const onOut = () => setTip(null);

    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    document.addEventListener("scroll", onOut, true);
    return () => {
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
      document.removeEventListener("scroll", onOut, true);
    };
  }, [enabled]);

  if (!tip) return null;
  return (
    <div className="a11y-tooltip a11y-ui" style={{ left: tip.x, top: tip.y }} role="status">
      {tip.text}
    </div>
  );
}

/* ------------------------------------------------------------------ button */
function OptionButton({ icon: Icon, label, active, level, levels, oversized, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "a11y-ui group relative flex flex-col items-center justify-center gap-2 rounded-xl border text-center transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]",
        oversized ? "px-3 py-6" : "px-2 py-4",
        active
          ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#f4d03f]"
          : "border-white/10 bg-white/5 text-white/80 hover:border-white/25 hover:bg-white/10",
      ].join(" ")}
    >
      <Icon className={oversized ? "h-7 w-7" : "h-5 w-5"} aria-hidden="true" strokeWidth={1.6} />
      <span className={oversized ? "text-sm font-medium" : "text-xs font-medium"}>{label}</span>

      {levels > 1 && (
        <span className="a11y-ui absolute right-2 top-2 flex gap-1" aria-hidden="true">
          {Array.from({ length: levels - 1 }).map((_, i) => (
            <span
              key={i}
              className={[
                "h-1.5 w-1.5 rounded-full",
                i < level ? "bg-[#D4AF37]" : "bg-white/20",
              ].join(" ")}
            />
          ))}
        </span>
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ widget */
export default function AccessibilityWidget({ onMotionChange }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(DEFAULTS);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  const tooltipNode = useTooltips(state.tooltips);

  /* hydrate from localStorage */
  useEffect(() => {
    setMounted(true);
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved) setState({ ...DEFAULTS, ...saved });
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  /* persist + push to DOM + tell the provider about motion */
  useEffect(() => {
    if (!mounted) return;
    applyToDom(state);
    onMotionChange?.(state.motion);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage may be blocked */
    }
  }, [state, mounted, onMotionChange]);

  /* Ctrl+U opens/closes, Escape closes */
  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* focus trap while the panel is open */
  useEffect(() => {
    if (!open) return;
    const node = panelRef.current;
    node?.querySelector("button")?.focus();
    const onTab = (e) => {
      if (e.key !== "Tab" || !node) return;
      const items = node.querySelectorAll("button, [href], input, select, textarea");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [open]);

  const toggle = useCallback(
    (key) => setState((s) => ({ ...s, [key]: !s[key] })),
    []
  );
  const cycle = useCallback(
    (key, levels = 4) => setState((s) => ({ ...s, [key]: (s[key] + 1) % levels })),
    []
  );
  const reset = useCallback(() => setState(DEFAULTS), []);

  const big = state.oversized;
  const options = [
    { key: "contrast", icon: Contrast, label: "Contrast +", levels: 4, kind: "cycle" },
    { key: "links", icon: Link2, label: "Highlight Links", kind: "toggle" },
    { key: "fontscale", icon: Type, label: "Bigger Text", levels: 4, kind: "cycle" },
    { key: "spacing", icon: StretchHorizontal, label: "Text Spacing", levels: 4, kind: "cycle" },
    { key: "motion", icon: PauseCircle, label: "Pause Animations", kind: "toggle" },
    { key: "images", icon: ImageOff, label: "Hide Images", kind: "toggle" },
    { key: "dyslexic", icon: Eye, label: "Dyslexia Friendly", kind: "toggle" },
    { key: "cursor", icon: MousePointer2, label: "Cursor", kind: "toggle" },
    { key: "tooltips", icon: Info, label: "Tooltips", kind: "toggle" },
    { key: "lineheight", icon: UnfoldVertical, label: "Line Height", levels: 4, kind: "cycle" },
    { key: "align", icon: AlignLeft, label: "Text Align", levels: 4, kind: "cycle" },
    { key: "saturation", icon: Droplet, label: "Saturation", levels: 4, kind: "cycle" },
  ];

  if (!mounted) return null;

  return createPortal(
    <>
      {tooltipNode}

      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Open accessibility menu (Ctrl + U)"
        className="a11y-ui fixed bottom-5 left-5 z-[2147483000] flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#0b0b0b] text-[#D4AF37] shadow-lg shadow-black/40 transition-colors hover:bg-[#D4AF37] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <PersonStanding className="h-7 w-7" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="a11y-panel"
            id="a11y-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="false"
            aria-label="Accessibility menu"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className={[
              "a11y-ui fixed bottom-0 left-0 top-0 z-[2147483001] flex flex-col border-r border-white/10 bg-[#0b0b0b]/98 backdrop-blur-md",
              big ? "w-[26rem] max-w-full" : "w-[21rem] max-w-full",
            ].join(" ")}
          >
            {/* Header */}
            <div className="a11y-ui flex items-center justify-between border-b border-white/10 bg-[#111] px-5 py-4">
              <h2 className="a11y-ui text-base font-semibold tracking-wide text-white">
                Accessibility Menu{" "}
                <span className="a11y-ui text-xs font-normal text-white/50">(Ctrl + U)</span>
              </h2>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                aria-label="Close accessibility menu"
                className="a11y-ui rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Body */}
            <div className="a11y-ui flex-1 overflow-y-auto px-4 py-4">
              <label className="a11y-ui mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="a11y-ui text-sm text-white/80">Oversized Widget</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={state.oversized}
                  onClick={() => toggle("oversized")}
                  className={[
                    "a11y-ui relative h-6 w-11 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]",
                    state.oversized ? "bg-[#D4AF37]" : "bg-white/20",
                  ].join(" ")}
                >
                  <motion.span
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 34 }}
                    className={[
                      "a11y-ui absolute top-0.5 h-5 w-5 rounded-full bg-white",
                      state.oversized ? "left-[1.375rem]" : "left-0.5",
                    ].join(" ")}
                  />
                </button>
              </label>

              <div className="a11y-ui grid grid-cols-2 gap-3">
                {options.map((o) => (
                  <OptionButton
                    key={o.key}
                    icon={o.icon}
                    label={o.label}
                    oversized={big}
                    levels={o.kind === "cycle" ? o.levels : 1}
                    level={o.kind === "cycle" ? state[o.key] : 0}
                    active={Boolean(state[o.key])}
                    onClick={() =>
                      o.kind === "cycle" ? cycle(o.key, o.levels) : toggle(o.key)
                    }
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="a11y-ui border-t border-white/10 p-4">
              <button
                type="button"
                onClick={reset}
                className="a11y-ui flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#f4d03f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Reset All Accessibility Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}
