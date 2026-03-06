# ADHD Cozy Timer: EasyFocus
### A Mindful Study Companion for ADHD Focus

**EasyFocus** is a modern, glassmorphic web application designed to combat time-blindness. Unlike standard pomodoro timers, it acknowledges the reality of **Hyperfocus** by providing a dual-timer system: a 90-minute "Macro" session alongside a customizable "Micro" task timer.



---

## Features
* **The Dual-Timer System:** Track your 90-minute deep work block while simultaneously timing specific sub-tasks (e.g., 20 mins for lecture review).
* **ADHD-Adaptive Logic:** When your 90-minute block ends but your specific task isn't finished, the app *asks* you how to proceed rather than forcing a jarring transition.
* **Architectural Soul:** A "Glass Flow" UI with two distinct modes:
    * **Light Mode:** Soft Pinks, Oranges, and Warm Whites for a cozy morning feel.
    * **Dark Mode:** Deep Black and Fluorescent Greens for high-contrast nighttime focus.
* **The 90-15-90-30 Rhythm:** A specialized rest cycle tailored to ADHD brain recovery.

## Technical Stack
* **HTML5:** Semantic structure for accessibility.
* **CSS3:** Custom properties (variables) for theme switching and Backdrop Blur filters.
* **Vanilla JavaScript:** Clean, dependency-free logic for interval management and state handling.

## Project Structure
```text
├── index.html   # Application structure & Modal logic
├── style.css    # Glassmorphism & Fluid background animations
└── script.js    # Dual-timer synchronization & Phase switching
