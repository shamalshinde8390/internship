# Week 4: Complete Business Website

A responsive multi-page professional services website built with HTML, CSS, and vanilla JavaScript. The demo business is **Northstar Studio**.

## Pages
- `index.html` — Home page and service overview
- `about.html` — Studio story, values, and process
- `services.html` — Service details and project workflow
- `contact.html` — Contact form with JavaScript validation

## Folder structure
```text
professional-services/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── README.txt
├── README.md
└── DOCUMENTATION.md
```

## Features
- Responsive mobile navigation with an accessible menu toggle
- Shared navigation and footer across pages
- Responsive layouts using CSS Grid and Flexbox
- Contact form with real-time validation and accessible error messages
- Semantic HTML, skip link, visible keyboard focus, and reduced-motion support
- Custom CSS illustration instead of large stock images
- Dynamic footer year and page metadata

## Run locally
1. Open this folder in VS Code.
2. Open `index.html` in a browser or use the Live Server extension.
3. Test navigation between all four pages and resize the browser.
4. Before real use, replace the demo email `hello@example.com` in `js/script.js`.

## Contact form limitation
The form validates in the browser and opens a pre-filled email using `mailto:`. It does not send submissions to a server. Use a backend or form service for production.

## Free deployment with GitHub Pages
1. Push this folder to your GitHub repository.
2. Open repository **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)` for the published folder if this project is at repository root.
4. Save and wait for the deployment URL to appear.
5. Test all page links on the published URL.

If this project is inside a subfolder of the repository, GitHub Pages project URLs include that folder name. Keep all links relative, as they are in this project.

## Testing checklist
- Open each HTML page directly and follow every navigation link.
- Test mobile menu on a narrow screen and with keyboard focus.
- Submit invalid form details and confirm errors appear.
- Submit valid details and verify the email draft is prefilled.
- Test at mobile, tablet, and desktop widths.
- Check browser console for errors.
