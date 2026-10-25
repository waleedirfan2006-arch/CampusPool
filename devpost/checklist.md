---
doc: checklist
status: approved
---

# Build Checklist

Build mode: fast

## Slices

- [x] **1. You can enter fuel, passengers, and fee and see what each passenger owes**
  Becomes usable: A local HTML page you can open in the browser: three fields, Calculate, and either the whole-rupee owed amount with the base-share + fee line, or the red hint. The unique kernel (driver included in the fuel split; each passenger adds the full wallet fee) is on screen.
  Why now: The kernel is the product. Scaffolding (the three files, no build step) lives inside this same slice so the first thing you try is already the settle-up math, not empty plumbing.
  PRD ref: `prd.md > The Core Journey`, `prd.md > Screens and Layout`, `prd.md > Look and Feel`, `prd.md > Features and Behavior`, `prd.md > States and Boundaries`
  Spec ref: `spec.md > Tech Stack`, `spec.md > File Structure`, `spec.md > Data & Logic Flow`
  Build: Add `index.html`, `style.css`, and `script.js` with no npm or framework. Page: title Commute Fare Splitter, three numeric fields, full-width Calculate, result hidden until valid. Dark campus-night styling (charcoal, white text, safety-yellow button, focus glow). On Calculate, parse integers; invalid fuel or passengers (or a negative fee) show **Please enter valid fuel and passenger amounts.** and hide the result; empty fee is 0. `totalPeople = passengers + 1`, `baseShare = Math.round(fuel / totalPeople)`, `totalOwed = baseShare + fee`. Success copy and button/result motion as in the PRD.
  Verify (mechanical): Open `index.html` in the browser. Confirm the result is hidden on load. Calculate `1000` / `3` / `10` → Each passenger owes: 260 and (Base Share: 250 + Transfer Fee: 10). Calculate `1000` / `2` / `10` → 343 and 333 + 10. Empty fee with valid fuel/passengers treats fee as 0. Invalid fuel or passengers (including 2.5 passengers) and a negative fee keep the result hidden and show the red hint.
  Learner check: Open `index.html` in your browser (phone-sized view if you can). Type 1000, 3, and 10, tap Calculate, and check that you see 260 with the 250 + 10 breakdown. Then try a blank fuel field and confirm the red hint appears instead.
  Commit: `Add commute fare splitter page with kernel math`

## Hands-on Checkpoints

- [ ] Early usable behavior explored — shared with final review (single-slice build)
- [ ] Final kick-the-tires exploration and feedback completed

## Final Review

- [ ] Final review complete — feedback resolved and learner confirms ready to ship

## Code Tour and App Map

- [ ] Learning activity complete — guided route, focused alternative, prior practice connected, or brief recap
- [ ] Optional edit and transfer reflection addressed — offered/declined/already covered/not applicable as appropriate
- [ ] `devpost/app-map.html` generated from finished code, checked, and shown, including a project-grounded practice to reuse

Activity and evidence: [what actually happened; real document/test/code references; unfinished work if interrupted]
Route and stops: [actual paths and symbols; guided stops completed, or reference-only route]
Edit outcome: [tried/kept/reverted/declined/not applicable; verification if changed]
Reflection: [offered/answered/declined/already covered — personal answer belongs only in the ignored profile]
Activity mode: [live app and editor, explicit static fallback, focused alternative, prior practice, or recap]

## Revisions
