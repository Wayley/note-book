# TS 指南

## Table of Contents

1. [数据类型](#types)
2. [类型断言](#type_assertion)
3. [接口](#interface)
4. [类](#class)

## Contents

<a name="types" id="types">

### 数据类型

#### 字符串(String)

```ts
let firstName: string = "Robben";
let lastName: string = "Wong";
let fullName: string = `${firstName}·${lastName}`;
```

#### 数字(Number)

> 所有数字都是浮点数。支持十进制、十六进制、二进制、八进制等等

```ts
let age: number = 20;
let score: number = 96.5;
```

#### 布尔值(Boolean)

```ts
let isTeenager: boolean = age < 18;
```

#### 数组(Array)

> 定义数组方式有 2 种：方式 1: 在元素类型后面接上`[]`;方式 2: 数组泛型方式 ,`Array<元素类型>`

```ts
let interests: string[] = ["soccer", "ping-pong"];
let ids: Array<number> = [192, 187, 13003];
```

#### 元组(Tuple)

> 元组类型允许表示一个已知元素数量和类型的数组，各元素类型不必相同。

```ts
let tuple: [string, number, boolean] = ["hi", 18, true];
```

#### 枚举(enum)

`enum`类型是对 JavaScript 标准数据类型的一个补充。

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Red;
console.log(color); // 打印出 0
```

默认情况下从`0`开始为元素编号。也可以手动的指定成员的数值。

```ts
enum Color {
  Red = 2,
  Green,
  Blue = 13,
}
let colorR: Color = Color.Red;
let colorG: Color = Color.Green;
let colorB: Color = Color.Blue;
console.log(colorR); // 打印出 2
console.log(colorG); // 打印出 3
console.log(colorB); // 打印出 13
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。

```ts
enum Color {
  Red = 2,
  Green,
  Blue = 13,
}
let colorName: string = Color[13];
console.log(colorName); // 打印出 Blue
```

#### Any

```ts
let notSure: any = 12345;
notSure = "maybe a string instead";
notSure = false; // okey, definitely a boolean

console.log(notSure); // 打印出 false
```

#### Void

`void` 表示没有任何类型。当一个函数没有返回值时,通常其返回值类型是`void`。

```ts
function sayHello(): void {
  console.log("hello");
}
```

> 声明一个`void`类型的变量，这个变量只能赋予`undefined`和`null`

#### Null 和 Undefined

#### Nerver

```ts
// 注意使用const(官方文档上的let会报错)
const sym = Symbol();

let obj = {
  [sym]: "value",
};

console.log(obj[sym]); // "value"
```

#### Object

<a name="type_assertion" id="type_assertion">

### 类型断言

类型断言有 2 种形式：`as`语法和`尖括号`语法

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

<a name="interface" id="interface">

### 接口

#### 普通的类型检查

> 如下例：类型检测器会查看`printFullName`的调用。`printFullName`函数有一个参数`person`,并要求参数`person`对象具有两个属性:名为`firstName`类型为`string`和名为`lastName`类型为`string`的两个属性。`printFullName`函数没有返回值。传入的参数实际上会有其他额外的属性(如`age`),但是编译器只会检查那些比需的属性是否存在并且类型是否匹配。

```ts
function printFullName(person: { firstName: string; lastName: string }): void {
  const { lastName, firstName } = person;
  console.log(`Hello, my name is ${firstName}· ${lastName}`);
}
let user = { firstName: "Robben", lastName: "Wong", age: 13 };
printFullName(user);
```

#### 使用 interface

```ts
interface Person {
  firstName: string;
  lastName: string;
}
function printFullName(person: Person): void {
  const { lastName, firstName } = person;
  console.log(`Helloo, my name is ${firstName}· ${lastName}`);
}
let user = { firstName: "Robben", lastName: "Wong", age: 13 };
printFullName(user);
```

#### 可选属性

> `属性名?:type`

```ts
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}
function printFullName(person: Person): void {
  const { lastName, firstName, age } = person;
  console.log(`Helloo, my name is ${firstName}· ${lastName}.`);
  if (age || age == 0) console.log(`And i am ${age} years old.`);
}
let user = { firstName: "Robben", lastName: "Wong", age: 19 };
printFullName(user);
```

#### 只读属性

> 属性名前用 readonly 来指定只读属性。`readonly 属性名:type`

```ts
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  readonly IDCardNumber: number | string;
}
let personA: Person = {
  firstName: "Robben",
  lastName: "Wong",
  IDCardNumber: "420323X",
};
// personA.IDCardNumber = '420323x';// An error occurred
console.log(personA);
```

<a name="class" id="class">

### 类

> 类(class)

#### 继承
