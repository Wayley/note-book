# algorithm

## Table of Contents

1. [斐波拉契](#fibonacci)
2. [记忆函数](#memoize_fn)
3. [使用记忆函数优化的斐波拉契](#fibonacci_with_memoize)
4. [面向对象的算法函数](#algorithm_with_object)

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

### 面向对象的算法函数

<a name="algorithm_with_object" id="algorithm_with_object">

```js
function Arithmetic({ name }) {
  this.version = "0.0.1";
  this.name = name;
}
// 记忆函数
Arithmetic.prototype.memoizeFunction = function (fn) {
  var cache = {};
  return function () {
    var key = arguments[0];
    if (cache[key]) {
      return cache[key];
    } else {
      var value = fn.apply(this, arguments);
      cache[key] = value;
      return value;
    }
  };
};
// 普通的斐波拉契
Arithmetic.prototype.fibonacci = function (n) {
  return n === 0 || n === 1 ? n : this.fibonacci(n - 1) + this.fibonacci(n - 2);
};
// 使用记忆函数优化后的斐波拉契
Arithmetic.prototype.fibonacciWithMemoize = function () {
  return this.memoizeFunction(function (n) {
    return n === 0 || n === 1
      ? n
      : this.fibonacciWithMemoize(n - 1) + this.fibonacciWithMemoize(n - 2);
  });
}.call(new Arithmetic());
```

```js
const arithmetic = new Arithmetic({ name: "first" });
const { fibonacci, fibonacciWithMemoize } = arithmetic;

console.log(arithmetic);

console.time("fibonacci");
console.log(fibonacci(60));
console.timeEnd("fifibonaccibfn");

console.time("fibonacciWithMemoize");
console.log(fibonacciWithMemoize(60));
console.timeEnd("fibonacciWithMemoize");
```
