# Visual Studio IDE

## 常用快捷键

|         快捷键         |       说明       |
| :--------------------: | :--------------: |
| `Ctrl`+`K` `Ctrl`+`D`  |   快速对齐代码   |
| `Ctrl`+`K` `Ctrl`+`C`  |   注释所选代码   |
| `Ctrl`+`K` `Ctrl`+`U`  | 取消注释所选代码 |
| `#region` `#endregion` |  添加代码折叠块  |

```C#
using System;
namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 折叠的代码块
            //Console.WriteLine("Hello World1");
            Console.WriteLine("Hello World2");
            #endregion
            Console.WriteLine("Hello World3");

        }
    }
}

```
