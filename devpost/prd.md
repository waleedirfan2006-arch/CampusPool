---
doc: prd
status: approved
---

# University Commute Fare Splitter — Product Requirements

A one-screen tool for university students who carpool daily: type fuel, passenger count, and wallet fee, then see the whole-rupee amount each passenger must send the driver.
Source: `scope.md > The Unique Kernel`, `scope.md > Who It's For`.

## The Core Journey

Source: `scope.md > The Core Loop`, `scope.md > What "Working" Looks Like`.

1. Student opens the page on a phone (or in a browser’s mobile view). They see a dark, uncluttered screen: title, three fields, a full-width Calculate button. The result area is empty and hidden.
2. They type **Total Fuel Cost (Rs)**, **Number of Passengers (Excluding Driver)**, and optionally **Mobile Transfer Fee (Rs)**. The phone shows a numeric keypad.
3. They tap **Calculate**. The button presses in slightly.
4. If fuel and passengers are valid, the result area appears below with a fade/slide: bold **Each passenger owes: [whole Rs]**, then smaller **(Base Share: [whole Rs] + Transfer Fee: [whole Rs])**.
5. Demo proof: `1000`, `3`, `10` → **Each passenger owes: 260** and **(Base Share: 250 + Transfer Fee: 10)**.

## Screens and Layout

One screen. Centered column, comfortable padding, large tap targets. Top to bottom:

1. Bold title: **Commute Fare Splitter**
2. Three stacked numeric fields with those exact labels and example placeholders (`1000`, `3`, `10`)
3. Large, full-width **Calculate** button
4. Result region under the button — hidden until a valid calculation

No extra copy, footer, nav, or second page.

## Look and Feel

Dark campus-night, easy on the eyes in a dark car:

- Matte charcoal background
- Crisp white text for contrast
- Focused fields: subtle glowing border
- **Calculate** is **safety yellow** — high-visibility parking-lot tool, maximum contrast on charcoal
- Button tap: short press animation (visually shrinks)
- Result: does not pop; fades in or slides down with a soft highlight so the number feels rewarding

No generic “AI app” chrome, no extra decoration.

## Features and Behavior

Source: `scope.md > The Unique Kernel`.

### Inputs

- **Total Fuel Cost (Rs)** — required; must be greater than 0
- **Number of Passengers (Excluding Driver)** — required; must be a **whole positive integer** (1, 2, 3, …). Decimals are invalid
- **Mobile Transfer Fee (Rs)** — optional; empty or 0 means no fee; treat empty as 0; **cannot be negative** (minimum 0)
- Fields use a numeric keypad on mobile

### Math (shown, not hidden)

- People in the car = passengers + 1 (the driver)
- Base share = fuel ÷ people in the car, **rounded to the nearest whole rupee** before the fee is added
- Amount each passenger owes = rounded base share + fee (fee is the full flat per-transfer amount, not split)
- Display only whole numbers — no decimal rupees (nobody sends fractions on Easypaisa)

Uneven-split example: fuel `1000`, passengers `2` (3 people), fee `10` → base **333**, total **343**.

### Calculate and result

- Tapping **Calculate** runs the check, then either shows the result or the error hint
- Success copy, exact:
  - **Each passenger owes: {total}**
  - **(Base Share: {base} + Transfer Fee: {fee})**
- Result stays on the same page; no navigation

Acceptance (checkable on screen):

- [ ] Opening the page shows only title, three labeled fields, and Calculate; result is hidden
- [ ] Demo inputs `1000` / `3` / `10` yield **Each passenger owes: 260** and **(Base Share: 250 + Transfer Fee: 10)**
- [ ] Inputs `1000` / `2` / `10` yield **Each passenger owes: 343** and **(Base Share: 333 + Transfer Fee: 10)**
- [ ] Empty fee with valid fuel and passengers treats fee as 0 and still shows a whole-rupee result
- [ ] Invalid fuel or passengers (including a decimal passenger count) keep the result hidden and show the error hint below Calculate
- [ ] A negative fee is invalid and shows the same error hint; result stays hidden
- [ ] After a success, invalid Calculate hides/fades the old result until inputs are valid again
- [ ] Calculate visibly presses in; a successful result fades or slides in

## States and Boundaries

- **First open** — result hidden; no leftover numbers from a previous visit required (nothing is saved)
- **Valid success** — result visible with whole-rupee total and breakdown
- **Invalid fuel or passengers** (empty, 0, negative, or a non-whole passenger count such as 2.5) — result stays hidden; small red hint just below Calculate: **Please enter valid fuel and passenger amounts.**
- **Invalid fee** (negative) — same hidden result and the same red hint
- **Fee empty or 0** — allowed; fee displays as 0 in the breakdown
- **Invalid after a prior success** — previous result fades out / hides until the new inputs are valid
- **No persistence** — closing the tab forgets the numbers; no accounts, no stored trips
- **PoC boundary** — local one-page calculator only; source: `scope.md > The POC Boundary`

## Product Decisions

- On-screen title **Commute Fare Splitter** (project name remains University Commute Fare Splitter)
- Currency is **Rs**; labels include `(Rs)` on money fields
- Driver is included in the fuel split; passengers typed **exclude** the driver
- Each passenger adds the **full** flat wallet fee
- Round **base share** to nearest whole rupee, then add fee; never show decimals
- Empty/zero fee is valid (sometimes there is no fee)
- Safety yellow Calculate on matte charcoal — parking-lot high-visibility
- Native numeric keypad to cut down typing errors
- Hide-result + one red hint instead of a heavy error UI
- Passenger count must be a whole positive integer; decimals trigger the same error hint
- Fee minimum is 0; a negative fee is invalid and uses the same error hint

## What We're Building

One dark, mobile-first page that computes and displays the whole-rupee passenger send amount with a transparent breakdown, including the wallet fee, plus the invalid-input hint described above.

## Deferred From the POC

- The broader campus carpooling system (matching, profiles, ride history) — later product, not this proof
- Saving trips, sharing a link, or remembering last inputs — not needed for the one-minute demo

## Possible Later Enhancements

Plug this calculator into the larger carpool product. Live fuel or wallet APIs are still out of this hackathon.

## Non-Goals

- Logins, accounts, databases — extra architecture; cut in `scope.md > Explicitly Cut`
- Maps, ride matching, scheduling, chat, multi-page flows — larger product
- Live fuel prices or Easypaisa/JazzCash APIs — user types the three numbers
- Decimal rupees, per-person fee splitting, or excluding the driver from fuel — contradicts the kernel
- Extra copy, footers, or decorative UI around the three fields

## Open Questions

None. Passenger whole-integers and non-negative fee are locked in **Product Decisions**.
