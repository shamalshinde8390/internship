# Week 4 Documentation: Complete Business Website

## Project
Northstar Studio is a fictional professional services business website created to demonstrate a complete responsive multi-page website.

## Pages
- Home: introduction, service cards, and calls to action.
- About: studio approach, values, and working process.
- Services: strategy, design, development, and process details.
- Contact: enquiry form with JavaScript validation.

## Technologies
HTML5, CSS3, vanilla JavaScript, and Google Fonts (DM Sans and Manrope).

## Technical requirements covered
- Four separate HTML pages with shared navigation.
- External stylesheet in `css/style.css`.
- External JavaScript in `js/script.js`.
- Responsive CSS Grid/Flexbox layouts and mobile breakpoints.
- Contact form validation with inline error messages.
- Accessible skip link, semantic landmarks, labels, focus indicators, and reduced-motion support.
- Lightweight CSS illustrations instead of large decorative image files.
- Dynamic footer year and mobile navigation interaction.

## Setup
1. Open the project folder in VS Code.
2. Open `index.html` in a browser or use Live Server.
3. Navigate between Home, About, Services, and Contact.
4. To test email composition, replace `hello@example.com` in `js/script.js` with a valid email address.

## Deployment
Push the project to GitHub. In repository Settings → Pages, select deployment from the `main` branch and the root folder when this project is at the repository root. Wait for the published URL, then test each page and the contact form. Netlify can also deploy the folder by dragging it into the manual deploy area.

## Testing checklist
- Check all navigation links on every page.
- Test responsive menu at mobile widths.
- Verify form validation for empty, invalid email, and short message inputs.
- Test keyboard navigation and visible focus.
- Test the layout in at least two browsers.
- Inspect browser console and network requests.

## Performance and image note
The design uses CSS-generated illustrations and no large raster assets, reducing image download cost. Google Fonts are external and require an internet connection; system fallbacks are defined. If photos are added later, resize them to display dimensions and prefer compressed WebP or AVIF files with appropriate alt text.

## Demo limitation
The business and contact details are placeholders. The contact form only validates in the browser and opens an email draft using `mailto:`. It does not deliver messages to a server.
