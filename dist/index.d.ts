import React from 'react';

type Lang = "heb" | "eng";
type TextSize = "normal" | "medium" | "large" | "xlarge";
type Position = "tl" | "tr" | "bl" | "br";
type AccessibilitySettings = {
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
type AccessibilityProps = {
    lang?: Lang;
    position?: Position;
};
declare const Accessibility: React.FC<AccessibilityProps>;

export { Accessibility, type AccessibilityProps, type AccessibilitySettings, type Lang, type TextSize };
