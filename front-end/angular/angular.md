# Angular

This is the notes collection for [Angular]()

## Table of Content

1. [angular-cli](#angular_cli)

## Contents

### angular-cli

<a name="angular_cli" id="angular_cli">

> node 8.x 及以上， npm 5.x 及以上

- 安装

  ```bash
  $ npm install -g @angular/cli
  ```

- 创建 APP

  ```bash
  $ ng new wz-app
  ```

- 进入项目目录下，并启动服务

  ```bash
  $ cd wz-app

  $ ng serve --open
  # or
  $ ng serve -o
  ```

- 常用的语法

  - 管道操作符 (|)
    > 例如: uppercase
  - 复写器指令
    > \*ngFor
  - 事件绑定 (click)
  - 样式类绑定 [class.selected]

    ```html
    <li
      *ngFor="let hero of Heroes"
      (click)="heroSelect(hero.id)"
      [class.selected]="hero === selectedHero"
    ></li>
    ```

  - 属性绑定
    ```html
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    ```

- 创建组件(以 user 组件为例)

  > 在 src/app 目录下创建 user 文件夹，并生成模板、样式和单元测试等定义组件文件

  ```bash
  $ ng generate component user
  ```

- 创建服务(以 HeroService 服务为例)

  ```bash
  $ ng generate service hero
  ```

- 创建模块(以 app-routing 模块为例)

  ```bash
  # --flat 把这个文件放进src/app中，而不是单独的目录
  # --module=app 告诉cli把它注册到AppModule的imports数组中
  $ ng generate module app-routing --flat --module=app
  ```
