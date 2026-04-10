# 🚀 Barba.js Series – 02 Overlay Transition

This project is part of my **Beginner → Advanced Barba.js Series**, where each project builds step-by-step toward creating modern, production-level page transitions.

👉 In this project, we move beyond basic container animations and introduce a **custom overlay transition system**.

---

## 📌 Overview

Instead of animating the page container directly, we use a **full-screen overlay (`#transition`)** to control the transition.

💡 This approach:

* Keeps page content untouched
* Runs animation on a separate layer
* Makes transitions more scalable and flexible

---

## 🆕 What’s New in This Project

✨ Custom overlay-based transition
✨ Reusable GSAP animation functions
✨ Separation of animation layer from content
✨ More scalable transition structure

---

## ⚙️ How the Transition Works

1. Overlay slides up → covers current page
2. Page switches in the background
3. Overlay moves out → reveals next page

👉 Creates a smooth **screen wipe transition**

---

## 🔹 GSAP Setup (Initial State)

```js
gsap.set("#transition", { y: "100%" });
```

📍 Keeps overlay hidden below the viewport initially

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

✔️ Covers the entire screen
✔️ Acts as transition layer

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
✔️ Resets overlay for reuse

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

### 🧠 Flow

* **leave()** → Overlay covers screen
* **enter()** → Overlay reveals next page
* **sync: true** → Smooth transition timing

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

## 🎨 Transition CSS (Used in Project)

```css
#transition{
    position: fixed;
    inset: 0;
    z-index: 9999;
    background-color: #111;
    pointer-events: none;
    touch-action: none;
    transform: translateY(100%);
}
```

📍 Ensures:

* Full-screen coverage
* No interaction blocking issues
* Smooth GSAP-driven movement

---

## 🔗 Live Demo

🚀 <https://barba-js-overlay-transition-02.vercel.app/>

---

## 🧠 Key Takeaways

* Overlay transitions are more scalable than container animations
* Decoupling animation from content improves flexibility
* GSAP functions can be reused across transitions
* This pattern aligns with modern production websites

---

## ✍️ Author

**Nischint Singh**

LinkedIn: https://www.linkedin.com/in/nischint-singh-98a329314/
