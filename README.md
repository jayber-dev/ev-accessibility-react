# ev-accessibility-react ♿

A modern, customizable, and accessible React component that provides users with accessibility tools to improve their browsing experience.

Built with accessibility (WCAG AA) in mind and designed to integrate seamlessly into any React application.

---

## Features

- Accessibility panel (toggle UI)
- Multi-language support (Hebrew / English)
- Keyboard accessible (focus management, ARIA)
- Customizable UI
- Lightweight and easy to integrate
- Designed for WCAG 2.1 AA compliance
- Optional Accessibility Declaration link support

---

## Installation

```bash
npm install ev-accessibility-react

- React is a peer dependency
- Make sure you are using React 18+

MIT License

Developed by Yevgeny Bershadsky
Technion – Israel Institute of Technology
```

## Usage

- You must import the default styles:
```jsx
    import "ev-accessibility-react/style.css";

    <Accessibility lang="heb" declarationUrl="https://example.com/accessibility" position="br" />
```

