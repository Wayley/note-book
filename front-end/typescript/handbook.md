# TS 指南

## Table of Contents

1. [数据类型](#types)
2. [类型断言](#type_assertion)
3. [接口](#interface)
4. [类](#class)
5. [泛型](#generic_object_types)

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

#### 额外属性检查

> 对象字面量赋值给变量或者作为参数传递的时候，会被进行特殊对待并进行额外属性检查。

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
}

let mySquare = createSquare({ colour: "red", width: 100 }); // 额外的colour属性会导致报错
```

- 使用类型断言

  ```ts
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    // some code
  }

  let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
  ```

- 添加字符串索引签名

  ```ts
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }
  ```

#### 接口描述函数类型

> `(source: string, subString: string): boolean;`

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量

```ts
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
```

对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：

```ts
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
```

#### 接口描述那些能够“通过索引得到”的类型

Typescript 支持`字符串索引签名`和`数字索引签名`。

> `[index: number]: string;` 和 `[index: string]: string;`

```ts
interface StringArray {
  [index: number]: string; // 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

可以`同时使用`两种类型的索引，但是数字索引的返回值`必须`是字符串索引返回值类型的`子类型`。例如使用`number`类型的`13`去索引,会把它转为`string`类型的`'13'`去索引,因此需要保持一致。

```ts
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
interface NotOkay {
  // 这里同时使用数字索引签名和字符串索引签名
  [x: number]: Animal; // 这里使用的数字索引返回值是Animal类型,而Animal类型却不是Dog类型的子类型，因此会报错。Error:数字索引类型“Animal”不能赋给字符串索引类型“Dog”。
  [x: string]: Dog;
}
```

字符串索引签名能够很好的描述 dictionary 模式，并且它们也会确保所有属性与其返回值类型相匹配。 因为字符串索引声明了 obj.property 和 obj["property"]两种形式都可以。

```ts
interface NumberDictionary {
  [index: string]: number;
  length: number; // 可以，length是number类型
  name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配。Error:类型“string”的属性“name”不能赋给字符串索引类型“number”。
}
```

可以使用`readonly`关键字将索引签名设置为只读，防止给索引赋值。

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Chinese", "English"];
myArray[1] = "Japanese"; // error! Error: 类型“ReadonlyStringArray”中的索引签名仅允许读取。
```

### 类

> 类(class)

#### 继承

<a name="generic_object_types" id="generic_object_types">

### 泛型
