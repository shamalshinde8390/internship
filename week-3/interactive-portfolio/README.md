# Week 3: Interactive Portfolio Website

A responsive personal portfolio using HTML, CSS, and vanilla JavaScript.

## Features
- Dark/light mode toggle saved in local storage
- Read more / show less About section
- Interactive caption slider
- To-do list with add, complete, remove, and local persistence
- Contact form validation with field-level error messages
- Visit counter and dynamic current year
- Responsive layout and accessible status messages

## Project structure
```text
interactive-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── DOCUMENTATION.md
└── images/
    └── profile.jpg (add your own photo)
```

## Run locally
1. Open this folder in VS Code.
2. Add your photo as `images/profile.jpg`.
3. In `script.js`, replace `you@example.com` with your email.
4. Update the placeholder name and text in `index.html`.
5. Open `index.html` in a browser. Live Server is optional.

## Testing checklist
- Toggle dark/light mode and reload to confirm the preference persists.
- Expand and collapse About content.
- Use both slider arrows.
- Add, complete, remove tasks, then reload to check local storage.
- Submit an empty or invalid contact form and check the error messages.
- Submit valid details and confirm the email app opens.
- Test at mobile and desktop widths.

## Contact form limitation
The form validates locally and opens a `mailto:` link. It does not send or store messages on a server. A backend or form service is needed for production.
