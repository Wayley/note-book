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
