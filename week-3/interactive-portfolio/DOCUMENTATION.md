# Week 3 Documentation: Interactive Portfolio Website

## Project overview
This project adds JavaScript interactions to the Week 2 styled portfolio using an external `script.js` file and DOM event listeners.

## Technologies
HTML5, CSS3, vanilla JavaScript, and browser local storage.

## Interactive features
1. Dark/light mode toggle, with the preference saved in local storage.
2. About section read-more toggle.
3. Caption slider with previous/next controls.
4. To-do list with add, complete, remove, and local persistence.
5. Contact form validation with real-time field errors and accessible feedback.
6. Visit counter and automatically updated footer year.

## Files
- `index.html`: semantic page content and controls
- `style.css`: styling, responsive layout, and dark-mode variables
- `script.js`: reusable functions, DOM updates, event listeners, validation, and local storage
- `images/`: add `profile.jpg`
- `README.md`: run instructions and test checklist

## Run the project
1. Open the project folder in VS Code.
2. Add `images/profile.jpg`.
3. Replace the placeholder name and `you@example.com` in `script.js`.
4. Open `index.html` in a browser.

## Testing
Test each interactive feature, refresh to verify saved theme and tasks, try invalid form inputs, and check the layout at desktop and mobile widths.

## Limitation
The contact form validates fields and opens the visitor's email app with a prefilled message. It does not deliver messages through a server.
