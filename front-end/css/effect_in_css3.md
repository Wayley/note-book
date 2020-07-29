# CSS3 特效

## 交错动画

```html
<div class="loading">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

```css
.loading {
  display: flex;
  animation-delay: 1s;
}

.dot {
  position: relative;
  width: 2em;
  height: 2em;
  margin: 0.8em;
  border-radius: 50%;
}

.dot::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  animation: wave 2s ease-out infinite;
}

.dot:nth-child(1) {
  background: #7ef9ff;
}

.dot:nth-child(1)::before {
  animation-delay: 1 * 0.2s;
}

.dot:nth-child(2) {
  background: #89cff0;
}

.dot:nth-child(2)::before {
  animation-delay: 2 * 0.2s;
}

.dot:nth-child(3) {
  background: #4682b4;
}

.dot:nth-child(3)::before {
  animation-delay: 3 * 0.2s;
}

.dot:nth-child(4) {
  background: #0f52ba;
}

.dot:nth-child(4)::before {
  animation-delay: 4 * 0.2s;
}

.dot:nth-child(5) {
  background: #000080;
}

.dot:nth-child(5)::before {
  animation-delay: 5 * 0.2s;
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
```

## 文字动态渐入

### 从左渐入

```html
<p class="landIn">land in from the left slide</p>
```

```css
p {
  margin: 0 9em;
  font-size: 2em;
  font-weight: 600;
}

.landIn {
  display: flex;
  flex-wrap: wrap;
  line-height: 1.8;
  color: white;
  font-family: Lora, serif;
  white-space: pre;
}

.landIn span {
  animation: landIn 0.8s ease-out both;
}

@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

```js
let landInTexts = document.querySelectorAll(".landIn");
landInTexts.forEach((landInText) => {
  let letters = landInText.textContent.split("");
  landInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    landInText.append(span);
  });
});
```

### 从中间渐入

```html
<div class="reveal">sword art online</div>
```

```css
.reveal {
  position: relative;
  display: flex;
  color: #6ee1f5;
  font-size: 2em;
  font-family: Raleway, sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  white-space: pre;
}

.reveal::before,
.reveal::after {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  width: 2px;
  height: 100%;
  background: white;
  opacity: 0;
  transform: scale(0);
}

.reveal::before {
  left: 50%;
  animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
}

.reveal::after {
  right: 50%;
  animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
}

.reveal span {
  opacity: 0;
  transform: scale(0);
  animation: fadeIn 2.4s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}

@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
```

```js
let duration = 0.8;
let delay = 0.3;
let revealText = document.querySelector(".reveal");
let letters = revealText.textContent.split("");
revealText.textContent = "";
let middle = letters.filter((e) => e !== " ").length / 2;
letters.forEach((letter, i) => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
  revealText.append(span);
});
```

### 文字背景动态渐出

```html
<div class="wrapper">
  <h1 class="slide-bar title">I'm alphardex.</h1>
  <p class="slide-bar subtitle">A CSS Wizard</p>
</div>
```

```css
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background: #222;
  flex-direction: column;
}
.slide-bar {
  position: relative;
  color: transparent;
  animation: fill-text-white 2s 1.6s forwards;
  line-height: 30px;
  width: 240px;
  height: 30px;
}
.slide-bar::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: left;
  animation: slide-in-out 2s cubic-bezier(0.75, 0, 0, 1) forwards;
}
@keyframes slide-in-out {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}

@keyframes fill-text-white {
  to {
    color: #fff;
  }
}
.title {
  margin: 0;
  font-family: Lora, serif;
  font-size: 32px;
}
.title::before {
  background: #ff4081;
}
.subtitle {
  margin-top: 10px;
  font-family: Lato, sans-serif;
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
  animation-delay: 3.2s;
}
.subtitle::before {
  background: #03a9f4;
  animation-delay: 2s;
}
```
