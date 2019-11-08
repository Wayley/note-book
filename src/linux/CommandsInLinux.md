# This is the notes collection for the Commands in Linux

## Table of Contents

1. [Common Used Commands](#common_used)

2. [File Management](#FM)

   1. [cat](#cat)
   2. [chattr](#chattr)
   3. [chgrp](#chgrp)
   4. [mv](#mv)
   5. [rm](#rm)

3. [Document Editing](#DE)

## Contents

<a name="common_used" id="common_used">

### Common Used Commands

| 命令                                        | 其他形式                                                   | 说明                                                      |
| ------------------------------------------- | :--------------------------------------------------------- | --------------------------------------------------------- |
| mkdir myFolder                              |                                                            | 创建 myFolder 的文件夹                                    |
| rm -r myFolder                              | -f                                                         | 删除 myFolder 文件夹                                      |
| touch myFile.txt                            | -f 强制                                                    | 创建 myFile.txt 的文件                                    |
| rm myFile.txt                               |                                                            | 删除 myFile.txt 文件                                      |
| vi myFile.txt                               |                                                            | 新建一个文件并进入编辑状态,如果文件存在则直接进入编辑状态 |
| vi 是 linux 下的文本编辑器程序，有两种模式; | vi myFile.txt 会默认进入命令模式，按:+命令会执行相关操作； |                                                           |
| i (命令模式===>编辑模式)                    | esc (编辑模式===>命令模式)                                 |                                                           |
| 命令模式下                                  | :q                                                         | 退出编辑，若文本内容被修改过，则会报错                    |
|                                             | :q!                                                        | 强制退出编辑，若文本内容被修改过，会丢弃此次的修改        |
|                                             | :x                                                         | 退出编辑并保存                                            |
|                                             | dd                                                         | 删除当前行                                                |

<a name="FM" id="FM">

### File Management

<a name="cat">

#### cat

<a name="chattr">

#### chattr

<a name="chgrp">

#### chgrp

<a name="mv">

#### mv

> 语法

```bash
$ mv [options] source dest
# or
$ mv [options] source... directory
```

> 参数说明

- -i 若指定目录已有同名文件,则先询问是否覆盖旧文件;
- -f 在 mv 操作要覆盖某已有的目标文件时不给任何提示;

|        命令格式        |                                         结果                                          |
| :--------------------: | :-----------------------------------------------------------------------------------: |
| mv 源文件名 目标文件名 |                               将源文件名改为目标文件名                                |
| mv 源文件名 目标目录名 |                                 将文件移动到目标目录                                  |
| mv 源目录名 目标目录名 | 目标目录已存在,将源目录移动到目标目录;</br>目标目录不存在则将源目录名称改为目标目录名 |
| mv 源目录名 目标文件名 |                                         error                                         |

> Examples

- 将文件 a(a.txt) 更名为 b(b.txt)

```bash
$ mv a b
# or
$ mv a.txt b.txt
```

- 将 info 目录放入到 logs 目录中(如果 logs 目录不存在，则将 info 目录改名为 logs)

```bash
$ mv info/ logs
```

- 将/usr/logs 下的所有文件和目录移动到当前目录下

```bash
$ mv /usr/logs/* .
```

> mv 操作文件时是移动并且重命名

- 目标目录和源目录一致,指定了新文件名，则效果仅仅是重命名。

```bash
$ mv /home/logs/a.txt /home/logs/b.txt
```

- 目标目录与源目录不一致,没有指定新文件名,效果仅仅是移动。

```bash
$ mv /home/logs/a.txt /home/info/
# or
$ mv /home/logs/a.txt /home/info
```

- 目标目录与源目录不一致,指定了新文件名,效果是 移动+重命名。

```bash
$ mv /home/logs/a.txt /home/info/b.txt
```

<a name="rm">

#### rm

> 语法

```bash
$ rm [options] name...
```

> 参数说明
> (位置和顺序可换)

- -i 删除前逐一询问确认。
- -f 即使原档案属性设置为唯读，也可直接删除，无需逐一确认。
- -r 将目录及以下之档案亦逐一删除。
- -ir or -i -r 组合使用

  > Examples

- 删除文件可直接使用 rm

```bash
$ rm a.txt

# or
$ rm -i a.txt
# rm: remove regular file 'aaaa.txt'?
```

- 删除目录则必须配合选项 -r

```bash
$ rm logs/
# rm: cannot remove 'logs/': Is a directory

$ rm -r -i logs/
# or rm -ri logs/
# rm: remove directory 'logs/'?
```

- 删除当前目录下所有文件及目录

```bash
$ rm -r *
```

<a name="DE" id="DE">

### Document Editing
