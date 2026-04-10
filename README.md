# 🚀 Barba.js Series – 02 Overlay Transition

This project is part of my **Beginner → Advanced Barba.js Series**, where each project builds step-by-step toward creating modern, production-level page transitions.

👉 In this project, we move beyond basic container animations and introduce a **custom overlay transition system**.

---

## 📌 Overview

Instead of animating the page container directly, we use a **full-screen overlay (`#transition`)** to control the transition.

💡 This is closer to how real-world websites handle transitions:

* Content stays untouched
* Animation runs on a separate layer
* More flexibility for future effects

---

## 🆕 What’s New in This Project

✨ Custom overlay-based transition
✨ Reusable GSAP animation functions
✨ Cleaner separation between content & animation
✨ More scalable transition structure

---

## ⚙️ How the Transition Works

Simple flow:

1. Overlay slides up → covers current page
2. Page switches in the background
3. Overlay moves out → reveals next page

👉 This creates a smooth **“screen wipe” effect**

---

## 🔹 GSAP Setup (Initial State)

```js
gsap.set("#transition", { y: "100%" });
```

📍 Keeps the overlay hidden below the screen initially

---

## 🔹 Animation Functions

### ▶️ Overlay In (Page Exit)

```js
function overlayIn() {
  return gsap.to("#transition", {
    y: "0%",
    duration: 1.2,
    ease: "power3.inOut"
  });
}
```

✔️ Moves overlay upward
✔️ Covers the entire screen

---

### ▶️ Overlay Out (Page Enter)

```js
function overlayOut() {
  return gsap.to("#transition", {
    y: "-100%",
    duration: 1,
    ease: "power3.inOut",
    onComplete: () => {
      gsap.set("#transition", { y: "100%" });
    }
  });
}
```

✔️ Reveals next page
✔️ Resets overlay for next transition

---

## 🔹 Barba.js Integration

```js
barba.init({
  sync: true,

  transitions: [{
    name: "overlay-effect",

    leave() {
      return overlayIn();
    },

    enter() {
      return overlayOut();
    }
  }]
});
```

### 🧠 What’s happening here?

* **leave()** → Overlay covers the screen
* **enter()** → Overlay reveals next page
* **sync: true** → Keeps transition smooth and connected

---

## 🧱 Minimal HTML Structure

```html
<body data-barba="wrapper">

  <div id="transition"></div>

  <div class="page" data-barba="container">
    <!-- Page Content -->
  </div>

</body>
```

---

## 🎨 Important CSS

```css
#transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}
```

📍 Ensures overlay:

* Covers full screen
* Stays above all content
* Works smoothly during animation

---

## 🔗 Links

🔴 Live Demo: <Add Vercel Link Here>
💻 Source Code: <Add GitHub Link Here>

---

## 🧠 Key Takeaways

* Overlay transitions are more flexible than container-based ones
* Separating animation from content improves scalability
* Reusable GSAP functions make your code cleaner
* This pattern is used in real-world modern websites

---

## ✍️ Author

**Nischint Singh**

LinkedIn: https://www.linkedin.com/in/nischint-singh-98a329314/
