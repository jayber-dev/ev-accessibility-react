# ev-accessibility-react 

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

## Legal Notice & Responsibility

This package is provided as a tool to help improve website accessibility and support alignment with standards such as **WCAG 2.1 AA**. However, it **does not guarantee full compliance** with any legal or regulatory accessibility requirements.

By using this package, you acknowledge and agree that:

- You are solely responsible for ensuring your website or application complies with all applicable accessibility laws and regulations.
- This package is provided **"as is"**, without any warranties of any kind, express or implied.
- The author shall not be held liable for any claims, damages, or legal issues arising from the use or misuse of this package.

> Accessibility compliance depends on multiple factors beyond this component, including content structure, design, and overall implementation.

---

## Reporting Issues

If you encounter any bugs, accessibility issues, or have suggestions for improvement, please open an issue on GitHub:

https://github.com/jayber-dev/ev-accessibility-react

Your feedback is highly appreciated and helps improve the project for everyone 