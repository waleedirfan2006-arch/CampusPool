---
doc: spec
status: approved
---
University Commute Fare Splitter — Technical Specification
Tech Stack
HTML5: Page structure.

CSS3: Styling, layout, and animations.

Vanilla JavaScript: DOM manipulation and math logic.

No dependencies: No React, no npm, no build step.

File Structure
index.html: UI (title, inputs, button, hidden result).

style.css: Dark campus-night theme.

script.js: Calculation logic.

Data & Logic Flow
Parse inputs as integers on Calculate click.

If fuel or passengers is empty/invalid: show red hint, hide result.

If fee is empty, treat as 0.

totalPeople = passengers + 1. baseShare = Math.round(fuel / totalPeople). totalOwed = baseShare + fee.
