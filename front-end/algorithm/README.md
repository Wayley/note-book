# algorithm

## Table Of Contents

1. [斐波拉契](#fibonacci)
2. [记忆函数](#memoize_fn)
3. [使用记忆函数优化的斐波拉契](#fibonacci_with_memoize)

## Contents

### 斐波拉契

<a name="fibonacci" id="fibonacci">

```js
function fibonacci(n) {
  return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n;
}
```

### 记忆函数

<a name="memoize_fn" id="memoize_fn">

```js
function memoizeFn(fn) {
  var cache = {};
  return function () {
    var key = arguments[0];
    if (cache[key]) {
      return cache[key];
    } else {
      cache[key] = fn(key);
      return cache[key];
    }
  };
}
```

### 使用记忆函数优化的斐波那契

<a name="fibonacci_with_memoize" id="fibonacci_with_memoize">

```js
const fibonacciWithMemoize = memoizeFn(function (n) {
  return n > 1 ? fibonacciWithMemoize(n - 1) + fibonacciWithMemoize(n - 2) : n;
});
```
