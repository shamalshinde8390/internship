# Week 2: Styled Portfolio Website

A responsive portfolio website built with semantic HTML5 and external CSS3.

## Features
- External `style.css` stylesheet
- Custom color scheme and Inter font
- CSS Grid and Flexbox layouts
- Hover effects and transitions
- Responsive layouts for tablets and mobile screens
- About, Skills, and Contact sections
- Accessible labels, alt text, and visible keyboard focus styles

## Project structure
```text
styled-portfolio/
├── index.html
├── style.css
├── README.md
├── DOCUMENTATION.md
├── images/
│   └── profile.jpg (add your own photo)
└── screenshots/
    └── (add desktop and mobile screenshots)
```

## Run locally
1. Open this folder in VS Code.
2. Add your photo as `images/profile.jpg`.
3. Replace `Your Name`, sample text, and `you@example.com`.
4. Open `index.html` in a browser. VS Code Live Server is optional.

The Google Font loads when an internet connection is available. The page uses a fallback font if it cannot load.

## Contact form
The demo form uses `mailto:` and opens the visitor's default email app. It does not store or send submissions through a server. Use a backend or form service for production.

## Testing checklist
- Test navigation links.
- Hover over links, buttons, and skill cards.
- Resize the browser to desktop, tablet, and mobile widths.
- Confirm the profile image loads and has alt text.
- Test required-field and email validation.
- Save screenshots in `screenshots/` before submission.
