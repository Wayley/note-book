# Shell

> This IS The NOTES COLLECTION For [SHELL]

- Shell 是指一种应用程序,它提供了一个界面,用户可以通过这个界面访问操作系统内核的服务;
- Shell script 是指 shell 脚本,一种为 shell 编写的脚本程序;
- Shell 种类/环境
  - Bourne Shell(/usr/bin/sh 或者/bin/sh)
  - Bourne Again Shell(/bin/bash)
  - C Shell(/usr/bin/csh)
  - K Shell(/usr/bin/ksh)
  - Shell for Root(/sbin/sh)
  - Node Shell(/usr/bin/node)
- `#!`告知系统其后路径所指定的程序即是要解释此脚本文件的 Shell 程序;
- 初识 Shell scripts
  - Nodejs shell script
    ```shell
    #!/usr/bin/node
    console.log("Hello Nodejs");
    ```
  - Bourne shell script
    ```bash
    #!/bin/bash
    echo "Hello World !"
    ```
