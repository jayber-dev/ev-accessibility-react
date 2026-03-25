import React, { useEffect, useId, useMemo, useRef, useState } from "react";
// import "./Accessibility.css";
import { BiAccessibility } from "react-icons/bi";

export type Lang = "heb" | "eng";
export type TextSize = "normal" | "medium" | "large" | "xlarge";
export type Position = "tl" | "tr" | "bl" | "br";
export type AccessibilitySettings = {
	textSize: TextSize;
	grayscale: boolean;
	highContrast: boolean;
	invertColors: boolean;
	underlineLinks: boolean;
	readableFont: boolean;
	reducedMotion: boolean;
	highlightHeadings: boolean;
	highlightFocus: boolean;
};

export type AccessibilityProps = {
	lang?: Lang;
	position?: Position;
	declarationUrl?: string;
};

const STORAGE_KEY = "site-accessibility-settings";

const defaultSettings: AccessibilitySettings = {
	textSize: "normal",
	grayscale: false,
	highContrast: false,
	invertColors: false,
	underlineLinks: false,
	readableFont: false,
	reducedMotion: false,
	highlightHeadings: false,
	highlightFocus: false,
};

const TEXT = {
	heb: {
		openMenu: "פתח תפריט נגישות",
		a11yDeclaration: "הצהרת נגישות",
		closeMenu: "סגור תפריט נגישות",
		buttonLabel: "נגישות",
		buttonHelper: "Alt+a לפתיחה",
		title: "הגדרות נגישות",
		subtitle: "התאימו את האתר לקריאה וניווט נוחים יותר.",
		close: "סגור",
		reset: "איפוס",
		done: "סיום",
		textSize: "גודל טקסט",
		currentSize: "הגודל הנוכחי",
		sizes: {
			normal: "רגיל",
			medium: "בינוני",
			large: "גדול",
			xlarge: "גדול מאוד",
		},
		blackAndWhite: "שחור לבן",
		blackAndWhiteDesc: "הצגת האתר בגווני אפור.",
		highContrast: "ניגודיות גבוהה",
		highContrastDesc: "הגדלת הניגודיות בין הטקסט לרקע.",
		invertColors: "היפוך צבעים",
		invertColorsDesc: "היפוך צבעי האתר לתצוגה שונה.",
		underlineLinks: "קו תחתון לקישורים",
		underlineLinksDesc: "הצגת קישורים עם קו תחתון באופן קבוע.",
		readableFont: "גופן קריא",
		readableFontDesc: "מעבר לגופן פשוט וקריא יותר.",
		reducedMotion: "הפחתת תנועה",
		reducedMotionDesc: "הפחתת אנימציות ואפקטים של תנועה.",
		highlightHeadings: "הדגשת כותרות",
		highlightHeadingsDesc: "הבלטת כותרות ברחבי האתר.",
		highlightFocus: "פוקוס מוגבר",
		highlightFocusDesc: "הצגת סימון ברור יותר בניווט מקלדת.",
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
			xlarge: "Extra large",
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
		highlightFocusDesc: "Show a stronger keyboard focus indicator.",
	},
} as const;

const Accessibility: React.FC<AccessibilityProps> = ({ lang = "eng", position = "br", declarationUrl = "" }) => {
	const t = TEXT[lang];
	const isHebrew = lang === "heb";
	const [open, setOpen] = useState(false);
	const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

	const panelRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw) as AccessibilitySettings;
			setSettings({ ...defaultSettings, ...parsed });
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
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
			"a11y-highlight-focus",
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

	useEffect(() => {
		if (!open) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
				buttonRef.current?.focus();
			}
		};

		const onMouseDown = (event: MouseEvent) => {
			const target = event.target as Node;
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

	useEffect(() => {
		if (!open) return;
		const firstFocusable = panelRef.current?.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
		firstFocusable?.focus();
	}, [open]);

	const updateSetting = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
		setSettings((prev) => ({ ...prev, [key]: value }));
	};

	const resetAll = () => {
		setSettings(defaultSettings);
	};

	const textSizeLabel = useMemo(() => {
		return t.sizes[settings.textSize];
	}, [settings.textSize, t.sizes]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
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

	return (
		<>
			<div className={`ev-a11y-widget ${widgetVerticalClass} ${widgetHorizontalClass}`}>
				<button
					ref={buttonRef}
					type="button"
					aria-label={t.openMenu}
					aria-expanded={open}
					aria-controls="accessibility-panel"
					onClick={() => setOpen((prev) => !prev)}
					className="ev-a11y-trigger"
					title={t.openMenu}
				>
					<span aria-hidden="true">
						<BiAccessibility size={25} />
					</span>

					<span className="ev-a11y-trigger-shortcut">Alt+A</span>
				</button>
			</div>

			{open && <div className="ev-a11y-overlay" aria-hidden="true" />}
			{open && (
				<div
					id="accessibility-panel"
					ref={panelRef}
					role="dialog"
					aria-modal="true"
					aria-labelledby="accessibility-title"
					dir={isHebrew ? "rtl" : "ltr"}
					lang={lang}
					className={`ev-a11y-panel ${panelVerticalClass} ${panelHorizontalClass}`}
				>
					<div className="ev-a11y-header">
						<div>
							<h2 id="accessibility-title" className="ev-a11y-title">
								{t.title}
							</h2>
							<p className="ev-a11y-subtitle">{t.subtitle}</p>
						</div>
						<button
							type="button"
							onClick={() => {
								setOpen(false);
								buttonRef.current?.focus();
							}}
							className="ev-a11y-close"
							aria-label={t.closeMenu}
						>
							{t.close}
						</button>
					</div>

					<div className="ev-a11y-body">
						<section className="ev-a11y-section">
							<div>
								<h3 className="ev-a11y-section-title">{t.textSize}</h3>
								<p className="ev-a11y-section-text">
									{t.currentSize}: {textSizeLabel}
								</p>
							</div>

							<div className="ev-a11y-size-grid">
								{(["normal", "medium", "large", "xlarge"] as TextSize[]).map((size) => {
									const active = settings.textSize === size;
									return (
										<button
											key={size}
											type="button"
											aria-pressed={active}
											onClick={() => updateSetting("textSize", size)}
											className={`ev-a11y-size-button ${active ? "ev-a11y-size-button--active" : ""}`}
										>
											{t.sizes[size]}
										</button>
									);
								})}
							</div>
						</section>

						<ToggleRow
							isHebrew={isHebrew}
							title={t.blackAndWhite}
							description={t.blackAndWhiteDesc}
							checked={settings.grayscale}
							onChange={() => updateSetting("grayscale", !settings.grayscale)}
						/>

						<ToggleRow
							isHebrew={isHebrew}
							title={t.highContrast}
							description={t.highContrastDesc}
							checked={settings.highContrast}
							onChange={() => updateSetting("highContrast", !settings.highContrast)}
						/>

						<ToggleRow
							isHebrew={isHebrew}
							title={t.invertColors}
							description={t.invertColorsDesc}
							checked={settings.invertColors}
							onChange={() => updateSetting("invertColors", !settings.invertColors)}
						/>

						<ToggleRow
							isHebrew={isHebrew}
							title={t.underlineLinks}
							description={t.underlineLinksDesc}
							checked={settings.underlineLinks}
							onChange={() => updateSetting("underlineLinks", !settings.underlineLinks)}
						/>

						<ToggleRow
							isHebrew={isHebrew}
							title={t.readableFont}
							description={t.readableFontDesc}
							checked={settings.readableFont}
							onChange={() => updateSetting("readableFont", !settings.readableFont)}
						/>

						<ToggleRow
							isHebrew={isHebrew}
							title={t.reducedMotion}
							description={t.reducedMotionDesc}
							checked={settings.reducedMotion}
							onChange={() => updateSetting("reducedMotion", !settings.reducedMotion)}
						/>

						<ToggleRow
							isHebrew={isHebrew}
							title={t.highlightHeadings}
							description={t.highlightHeadingsDesc}
							checked={settings.highlightHeadings}
							onChange={() => updateSetting("highlightHeadings", !settings.highlightHeadings)}
						/>

						<ToggleRow
							isHebrew={isHebrew}
							title={t.highlightFocus}
							description={t.highlightFocusDesc}
							checked={settings.highlightFocus}
							onChange={() => updateSetting("highlightFocus", !settings.highlightFocus)}
						/>

						<a href={declarationUrl} target="_blank" rel="noopener noreferrer" className="ev-a11y-declaration-link">
							<span className="ev-a11y-declaration-icon" aria-hidden="true">
								📄
							</span>
							<span className="ev-a11y-declaration-text">{t.a11yDeclaration}</span>
						</a>
					</div>

					<div className="ev-a11y-actions">
						<button type="button" onClick={resetAll} className="ev-a11y-reset">
							{t.reset}
						</button>

						<button
							type="button"
							onClick={() => {
								setOpen(false);
								buttonRef.current?.focus();
							}}
							className="ev-a11y-done"
						>
							{t.done}
						</button>
					</div>
				</div>
			)}
		</>
	);
};

type ToggleRowProps = {
	title: string;
	description: string;
	checked: boolean;
	onChange: () => void;
	isHebrew: boolean;
};

const ToggleRow: React.FC<ToggleRowProps> = ({ title, description, checked, onChange, isHebrew }) => {
	const titleId = useId();
	const descriptionId = useId();

	return (
		<div className="ev-a11y-toggle-row">
			<div className="ev-a11y-toggle-top">
				<div>
					<h3 id={titleId} className="ev-a11y-toggle-title">
						{title}
					</h3>
					<p id={descriptionId} className="ev-a11y-toggle-description">
						{description}
					</p>
				</div>

				<button
					type="button"
					role="switch"
					aria-checked={checked}
					aria-labelledby={titleId}
					aria-describedby={descriptionId}
					onClick={onChange}
					className={`ev-a11y-toggle-switch ${checked ? "ev-a11y-toggle-switch--on" : ""} ${
						isHebrew ? (checked ? "ev-a11y-toggle-switch--rtl-on" : "ev-a11y-toggle-switch--rtl-off") : checked ? "ev-a11y-toggle-switch--ltr-on" : "ev-a11y-toggle-switch--ltr-off"
					}`}
				>
					<span className="ev-a11y-toggle-knob" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
};

export default Accessibility;
