---
doc: scope
status: approved
---

# University Commute Fare Splitter

A single-page web proof of concept that tells each passenger exactly how much to send the driver after a shared university commute, including the mobile-wallet transfer fee.

## The Unique Kernel
Not a generic split-the-bill calculator. After the ride, fuel is split equally among everyone in the car **including the driver**, then each passenger adds the **full flat mobile-wallet transfer fee** (e.g. Easypaisa) so the driver is not left short. The result is shown as a bold total plus a tiny transparent line: base share + fee — the thing that stops the argument.

## Who It's For
University students who already carpool to campus daily and settle up immediately after the ride. Today they do awkward mental math while fuel prices move and wallet fees nibble the transfer. They need the number, not a carpool platform.

## The Core Loop
Open the page → enter total daily fuel cost, number of passengers excluding the driver, and the flat transfer fee → tap Calculate → see “Each passenger owes: …” plus “(Base Share: … + Transfer Fee: …)” on the same screen. They come back because that settle-up happens every ride.

## Inspiration & Identity
Clean, mobile-first, zero-friction. One screen, numerical inputs, a giant Calculate button, a big bold result. No product chrome. Feels like a practical tool you use in the parking lot, not an app you “sign up” for.

## Why This Matters to the Learner
Muhammad is building a larger campus carpooling system and hit a real daily friction: the math at the end of the ride. This hackathon isolates that micro-problem. He also wants the written plan to keep an agent from over-engineering the web app or adding unnecessary dependencies.

## What "Working" Looks Like
Open the app locally in the browser, toggle mobile view, and show a clean title plus three fields. Type fuel `1000`, passengers `3`, fee `10`. Click Calculate. Instantly, same page: **Each passenger owes: 260**, and underneath **(Base Share: 250 + Transfer Fee: 10)**. That one-minute demo is the finish line. Deployment is optional.

Formula for that demo: 4 people in the car (3 passengers + driver); 1000 ÷ 4 = 250 base share; each of the 3 passengers sends 250 + 10 = 260.

## The POC Boundary
- One static web page, usable on a phone-sized screen
- Three numerical inputs: Total Fuel Cost; Number of Passengers (excluding driver); Mobile Wallet Transfer Fee
- One Calculate action
- Same-page result: bold amount each passenger must send, plus the base-share + fee breakdown
- Runs locally in the browser; no logins, no database, no user accounts

## Later
The broader campus carpooling system this calculator was sliced out of (matching, profiles, ride history, and the rest).

## Explicitly Cut
- **Logins, accounts, and any database** — they are not needed to prove the settle-up math, and they invite extra architecture and dependencies.
- **Ride matching, maps, scheduling, chat, or multi-page flows** — that is the larger product, not this proof of concept.
- **Live fuel prices or wallet APIs** — the user types the three numbers; the kernel is the transparent split, not integrations.
