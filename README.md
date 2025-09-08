# 🎬 Bringing Web Pages to Life with CSS & JavaScript

This project demonstrates how to combine **CSS3 transitions & animations** with **JavaScript functions** to create a dynamic and interactive user experience. It showcases hover effects, triggered animations, reusable JavaScript functions with parameters and return values, and event-driven CSS+JS integration.

---

## 📂 Project Structure

```
interactive-page/
│── index.html   # Structured content
│── styles.css   # Styling, transitions, and animations
│── script.js    # JavaScript logic and interactive functionality
│── README.md    # Documentation
```

---

## ✨ Features

### 🎨 Part 1: CSS3 Transitions and Animations

* **Button hover effect:** Smooth scale and background gradient change.
* **Box animation:** A reusable keyframe animation (`@keyframes moveBox`) that moves and changes color.
* **Modal animation:** Smooth fade and slide-in effect using `@keyframes slideFadeIn`.

### ⚡ Part 2: JavaScript Functions — Scope, Parameters & Return Values

* **Functions with parameters and return values:**

  * `calculateAnimationSpeed(baseSpeed, multiplier)` → returns dynamic animation duration.
* **Scope demonstration:**

  * Uses a **global variable** (`animationCount`) and **local variables** inside functions.
* **Reusable functions:**

  * `triggerBoxAnimation(speedMultiplier)` triggers the box animation with customizable speed.

### 🎬 Part 3: Combining CSS Animations with JavaScript

* **Box animation trigger:** Clicking the button adds/removes a CSS animation class dynamically.
* **Modal system:**

  * Opens when user clicks **Open Modal** button.
  * Closes when clicking the `×` icon or outside the modal.
  * Modal uses CSS animation, triggered via JS events.

---

## 🚀 How to Run

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Try the following:

   * Hover over the **“Hover Me!”** button to see the CSS-only effect.
   * Click **“Animate Box”** to trigger the JavaScript-controlled animation.
   * Open and close the modal window to see JS triggering CSS animations.

---

## 📚 Learning Outcomes

By completing this project, you’ll learn how to:

* Use **CSS3 transitions and keyframes** for visual dynamics.
* Write **JavaScript functions** with parameters, return values, and scope awareness.
* **Integrate CSS and JS** to create responsive, event-driven UI interactions.
* Organize code into **modular, readable, and reusable** components.

---

## 🌟 Example Use Cases

* Creating **interactive buttons** for better UX.
* Building **loading animations** or **popups/modals**.
* Enhancing web apps with **reusable animation triggers** via JavaScript.

---

## 📝 Author

Developed as part of an assignment on **Interactive Web Design**.
