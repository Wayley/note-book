# Interface

## 描述带有属性的普通对象

```ts
interface Student {
  id: string | number;
  name?: string;
  age?: number;
  [propName: string]: any;
}
```

## 描述函数类型

```ts
interface SearchFn {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFn;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
```

## 描述可索引的类型

```ts
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```
