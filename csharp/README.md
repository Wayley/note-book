# C-Sharp(C#)

## Visual Studio IDE 常用快捷键

> 参考[Visual Studio IDE 笔记](../editor/visual_studio.md)

## C#注意事项

1. 字符类型`char`和字符串类型`string`

   ```c#
   using System;

   namespace ConsoleApp1
   {
     class Program
     {
         static void Main(string[] args)
         {
             char charType = '男';// 一个字符并且使用单引号
             string stringType = "男性";// 可以为空字符串，零个或一个或多个字符，使用双引号
             Console.WriteLine(charType);
             Console.WriteLine(stringType);
         }
     }
   }

   ```

2. 转义符

   | 转义符 |                  说明                  |
   | :----: | :------------------------------------: |
   |  `\n`  |                  换行                  |
   |  `\"`  |                  `"`                   |
   |  `\t`  |           一个`tab`键的空格            |
   |  `\b`  | 表示一个退格键，放到字符串两边不起作用 |
   |  `\\`  |                  `\`                   |

3. 逻辑与(&&)的优先级大于逻辑或(||)

## 类型转换

- 隐式转换(自动类型转换)
- 显式转换(强制类型转换)
- Convert
