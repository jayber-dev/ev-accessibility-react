"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accessibility: () => Accessibility_default
});
module.exports = __toCommonJS(index_exports);

// src/Accessibility.tsx
var import_react = require("react");
var import_bi = require("react-icons/bi");
var import_jsx_runtime = require("react/jsx-runtime");
var STORAGE_KEY = "site-accessibility-settings";
var defaultSettings = {
  textSize: "normal",
  grayscale: false,
  highContrast: false,
  invertColors: false,
  underlineLinks: false,
  readableFont: false,
  reducedMotion: false,
  highlightHeadings: false,
  highlightFocus: false
};
var TEXT = {
  heb: {
    openMenu: "\u05E4\u05EA\u05D7 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
    a11yDeclaration: "\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
    closeMenu: "\u05E1\u05D2\u05D5\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
    buttonLabel: "\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
    buttonHelper: "Alt+a \u05DC\u05E4\u05EA\u05D9\u05D7\u05D4",
    title: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
    subtitle: "\u05D4\u05EA\u05D0\u05D9\u05DE\u05D5 \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8 \u05DC\u05E7\u05E8\u05D9\u05D0\u05D4 \u05D5\u05E0\u05D9\u05D5\u05D5\u05D8 \u05E0\u05D5\u05D7\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8.",
    close: "\u05E1\u05D2\u05D5\u05E8",
    reset: "\u05D0\u05D9\u05E4\u05D5\u05E1",
    done: "\u05E1\u05D9\u05D5\u05DD",
    textSize: "\u05D2\u05D5\u05D3\u05DC \u05D8\u05E7\u05E1\u05D8",
    currentSize: "\u05D4\u05D2\u05D5\u05D3\u05DC \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9",
    sizes: {
      normal: "\u05E8\u05D2\u05D9\u05DC",
      medium: "\u05D1\u05D9\u05E0\u05D5\u05E0\u05D9",
      large: "\u05D2\u05D3\u05D5\u05DC",
      xlarge: "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D0\u05D5\u05D3"
    },
    blackAndWhite: "\u05E9\u05D7\u05D5\u05E8 \u05DC\u05D1\u05DF",
    blackAndWhiteDesc: "\u05D4\u05E6\u05D2\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D1\u05D2\u05D5\u05D5\u05E0\u05D9 \u05D0\u05E4\u05D5\u05E8.",
    highContrast: "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4",
    highContrastDesc: "\u05D4\u05D2\u05D3\u05DC\u05EA \u05D4\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D1\u05D9\u05DF \u05D4\u05D8\u05E7\u05E1\u05D8 \u05DC\u05E8\u05E7\u05E2.",
    invertColors: "\u05D4\u05D9\u05E4\u05D5\u05DA \u05E6\u05D1\u05E2\u05D9\u05DD",
    invertColorsDesc: "\u05D4\u05D9\u05E4\u05D5\u05DA \u05E6\u05D1\u05E2\u05D9 \u05D4\u05D0\u05EA\u05E8 \u05DC\u05EA\u05E6\u05D5\u05D2\u05D4 \u05E9\u05D5\u05E0\u05D4.",
    underlineLinks: "\u05E7\u05D5 \u05EA\u05D7\u05EA\u05D5\u05DF \u05DC\u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",
    underlineLinksDesc: "\u05D4\u05E6\u05D2\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD \u05E2\u05DD \u05E7\u05D5 \u05EA\u05D7\u05EA\u05D5\u05DF \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2.",
    readableFont: "\u05D2\u05D5\u05E4\u05DF \u05E7\u05E8\u05D9\u05D0",
    readableFontDesc: "\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D2\u05D5\u05E4\u05DF \u05E4\u05E9\u05D5\u05D8 \u05D5\u05E7\u05E8\u05D9\u05D0 \u05D9\u05D5\u05EA\u05E8.",
    reducedMotion: "\u05D4\u05E4\u05D7\u05EA\u05EA \u05EA\u05E0\u05D5\u05E2\u05D4",
    reducedMotionDesc: "\u05D4\u05E4\u05D7\u05EA\u05EA \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA \u05D5\u05D0\u05E4\u05E7\u05D8\u05D9\u05DD \u05E9\u05DC \u05EA\u05E0\u05D5\u05E2\u05D4.",
    highlightHeadings: "\u05D4\u05D3\u05D2\u05E9\u05EA \u05DB\u05D5\u05EA\u05E8\u05D5\u05EA",
    highlightHeadingsDesc: "\u05D4\u05D1\u05DC\u05D8\u05EA \u05DB\u05D5\u05EA\u05E8\u05D5\u05EA \u05D1\u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05EA\u05E8.",
    highlightFocus: "\u05E4\u05D5\u05E7\u05D5\u05E1 \u05DE\u05D5\u05D2\u05D1\u05E8",
    highlightFocusDesc: "\u05D4\u05E6\u05D2\u05EA \u05E1\u05D9\u05DE\u05D5\u05DF \u05D1\u05E8\u05D5\u05E8 \u05D9\u05D5\u05EA\u05E8 \u05D1\u05E0\u05D9\u05D5\u05D5\u05D8 \u05DE\u05E7\u05DC\u05D3\u05EA."
  },
  eng: {
    openMenu: "Open accessibility menu",
    closeMenu: "Close accessibility menu",
    a11yDeclaration: "Accessibility Declaration",
    buttonLabel: "Accessibility",
    buttonHelper: "Alt+a to open",
    title: "Accessibility settings",
    subtitle: "Customize the site for easier reading and navigation.",
    close: "Close",
    reset: "Reset",
    done: "Done",
    textSize: "Text size",
    currentSize: "Current size",
    sizes: {
      normal: "Normal",
      medium: "Medium",
      large: "Large",
      xlarge: "Extra large"
    },
    blackAndWhite: "Black and white",
    blackAndWhiteDesc: "Show the site in grayscale.",
    highContrast: "High contrast",
    highContrastDesc: "Increase the contrast between text and background.",
    invertColors: "Invert colors",
    invertColorsDesc: "Invert the site colors for a different visual mode.",
    underlineLinks: "Underline links",
    underlineLinksDesc: "Always underline links so they are easier to identify.",
    readableFont: "Readable font",
    readableFontDesc: "Switch to a simpler and more readable font.",
    reducedMotion: "Reduced motion",
    reducedMotionDesc: "Reduce animations and motion effects.",
    highlightHeadings: "Highlight headings",
    highlightHeadingsDesc: "Make headings more visible across the page.",
    highlightFocus: "Strong focus outline",
    highlightFocusDesc: "Show a stronger keyboard focus indicator."
  }
};
var Accessibility = ({ lang = "eng", position = "br", declarationUrl = "" }) => {
  const t = TEXT[lang];
  const isHebrew = lang === "heb";
  const [open, setOpen] = (0, import_react.useState)(false);
  const [settings, setSettings] = (0, import_react.useState)(defaultSettings);
  const panelRef = (0, import_react.useRef)(null);
  const buttonRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setSettings({ ...defaultSettings, ...parsed });
    } catch (error) {
      console.log(error);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    const html = document.documentElement;
    html.classList.remove(
      "a11y-text-normal",
      "a11y-text-medium",
      "a11y-text-large",
      "a11y-text-xlarge",
      "a11y-grayscale",
      "a11y-high-contrast",
      "a11y-invert",
      "a11y-underline-links",
      "a11y-readable-font",
      "a11y-reduced-motion",
      "a11y-highlight-headings",
      "a11y-highlight-focus"
    );
    html.classList.add(`a11y-text-${settings.textSize}`);
    if (settings.grayscale) html.classList.add("a11y-grayscale");
    if (settings.highContrast) html.classList.add("a11y-high-contrast");
    if (settings.invertColors) html.classList.add("a11y-invert");
    if (settings.underlineLinks) html.classList.add("a11y-underline-links");
    if (settings.readableFont) html.classList.add("a11y-readable-font");
    if (settings.reducedMotion) html.classList.add("a11y-reduced-motion");
    if (settings.highlightHeadings) html.classList.add("a11y-highlight-headings");
    if (settings.highlightFocus) html.classList.add("a11y-highlight-focus");
  }, [settings]);
  (0, import_react.useEffect)(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onMouseDown = (event) => {
      const target = event.target;
      if (panelRef.current && !panelRef.current.contains(target) && buttonRef.current && !buttonRef.current.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [open]);
  (0, import_react.useEffect)(() => {
    if (!open) return;
    const firstFocusable = panelRef.current?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    firstFocusable?.focus();
  }, [open]);
  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };
  const resetAll = () => {
    setSettings(defaultSettings);
  };
  const textSizeLabel = (0, import_react.useMemo)(() => {
    return t.sizes[settings.textSize];
  }, [settings.textSize, t.sizes]);
  (0, import_react.useEffect)(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.code === "KeyA") {
        e.preventDefault();
        setOpen((val) => !val);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  const widgetVerticalClass = position === "tl" || position === "tr" ? "ev-a11y-pos-top" : "ev-a11y-pos-bottom";
  const widgetHorizontalClass = position === "tl" || position === "bl" ? "ev-a11y-pos-left" : "ev-a11y-pos-right";
  const panelVerticalClass = position === "tl" || position === "tr" ? "ev-a11y-panel-pos-top" : "ev-a11y-panel-pos-bottom";
  const panelHorizontalClass = position === "tl" || position === "bl" ? "ev-a11y-panel-pos-left" : "ev-a11y-panel-pos-right";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `ev-a11y-widget ${widgetVerticalClass} ${widgetHorizontalClass}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ref: buttonRef,
        type: "button",
        "aria-label": t.openMenu,
        "aria-expanded": open,
        "aria-controls": "accessibility-panel",
        onClick: () => setOpen((prev) => !prev),
        className: "ev-a11y-trigger",
        title: t.openMenu,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_bi.BiAccessibility, { size: 25 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ev-a11y-trigger-shortcut", children: "Alt+A" })
        ]
      }
    ) }),
    open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ev-a11y-overlay", "aria-hidden": "true" }),
    open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        id: "accessibility-panel",
        ref: panelRef,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "accessibility-title",
        dir: isHebrew ? "rtl" : "ltr",
        lang,
        className: `ev-a11y-panel ${panelVerticalClass} ${panelHorizontalClass}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ev-a11y-header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { id: "accessibility-title", className: "ev-a11y-title", children: t.title }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "ev-a11y-subtitle", children: t.subtitle })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                type: "button",
                onClick: () => {
                  setOpen(false);
                  buttonRef.current?.focus();
                },
                className: "ev-a11y-close",
                "aria-label": t.closeMenu,
                children: t.close
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ev-a11y-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "ev-a11y-section", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "ev-a11y-section-title", children: t.textSize }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "ev-a11y-section-text", children: [
                  t.currentSize,
                  ": ",
                  textSizeLabel
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ev-a11y-size-grid", children: ["normal", "medium", "large", "xlarge"].map((size) => {
                const active = settings.textSize === size;
                return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    type: "button",
                    "aria-pressed": active,
                    onClick: () => updateSetting("textSize", size),
                    className: `ev-a11y-size-button ${active ? "ev-a11y-size-button--active" : ""}`,
                    children: t.sizes[size]
                  },
                  size
                );
              }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ToggleRow,
              {
                isHebrew,
                title: t.blackAndWhite,
                description: t.blackAndWhiteDesc,
                checked: settings.grayscale,
                onChange: () => updateSetting("grayscale", !settings.grayscale)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ToggleRow,
              {
                isHebrew,
                title: t.highContrast,
                description: t.highContrastDesc,
                checked: settings.highContrast,
                onChange: () => updateSetting("highContrast", !settings.highContrast)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ToggleRow,
              {
                isHebrew,
                title: t.invertColors,
                description: t.invertColorsDesc,
                checked: settings.invertColors,
                onChange: () => updateSetting("invertColors", !settings.invertColors)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ToggleRow,
              {
                isHebrew,
                title: t.underlineLinks,
                description: t.underlineLinksDesc,
                checked: settings.underlineLinks,
                onChange: () => updateSetting("underlineLinks", !settings.underlineLinks)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ToggleRow,
              {
                isHebrew,
                title: t.readableFont,
                description: t.readableFontDesc,
                checked: settings.readableFont,
                onChange: () => updateSetting("readableFont", !settings.readableFont)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ToggleRow,
              {
                isHebrew,
                title: t.reducedMotion,
                description: t.reducedMotionDesc,
                checked: settings.reducedMotion,
                onChange: () => updateSetting("reducedMotion", !settings.reducedMotion)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ToggleRow,
              {
                isHebrew,
                title: t.highlightHeadings,
                description: t.highlightHeadingsDesc,
                checked: settings.highlightHeadings,
                onChange: () => updateSetting("highlightHeadings", !settings.highlightHeadings)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ToggleRow,
              {
                isHebrew,
                title: t.highlightFocus,
                description: t.highlightFocusDesc,
                checked: settings.highlightFocus,
                onChange: () => updateSetting("highlightFocus", !settings.highlightFocus)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: declarationUrl, className: "ev-a11y-declaration-link", children: t.a11yDeclaration })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ev-a11y-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: resetAll, className: "ev-a11y-reset", children: t.reset }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                type: "button",
                onClick: () => {
                  setOpen(false);
                  buttonRef.current?.focus();
                },
                className: "ev-a11y-done",
                children: t.done
              }
            )
          ] })
        ]
      }
    )
  ] });
};
var ToggleRow = ({ title, description, checked, onChange, isHebrew }) => {
  const titleId = (0, import_react.useId)();
  const descriptionId = (0, import_react.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ev-a11y-toggle-row", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ev-a11y-toggle-top", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { id: titleId, className: "ev-a11y-toggle-title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { id: descriptionId, className: "ev-a11y-toggle-description", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        "aria-labelledby": titleId,
        "aria-describedby": descriptionId,
        onClick: onChange,
        className: `ev-a11y-toggle-switch ${checked ? "ev-a11y-toggle-switch--on" : ""} ${isHebrew ? checked ? "ev-a11y-toggle-switch--rtl-on" : "ev-a11y-toggle-switch--rtl-off" : checked ? "ev-a11y-toggle-switch--ltr-on" : "ev-a11y-toggle-switch--ltr-off"}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ev-a11y-toggle-knob", "aria-hidden": "true" })
      }
    )
  ] }) });
};
var Accessibility_default = Accessibility;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accessibility
});
//# sourceMappingURL=index.js.map