# 语义化版本规范

> 语义化版本规范, 详见[文档](https://semver.org/)

## 版本格式

版本格式：主版本号.次版本号.修订号，版本号递增规则如下：

- 主版本号(MAJOR)：当你做了不兼容的 API 修改，
- 次版本号(MINOR)：当你做了向下兼容的功能性新增，
- 修订号(PATCH)：当你做了向下兼容的问题修正。
  先行版本号及版本编译信息可以作为修饰标识符加到“主版本号.次版本号.修订号”的后面，作为延伸。

修饰标识符，如下：

- alpha：内部版本
- beta：测试版
- demo：演示版
- enhance：增强版
- free：自由版
- full version：完整版，即正式版
- lts：长期维护版本
- release：发行版
- rc：即将作为正式版发布
- standard：标准版
- ultimate：旗舰版
- upgrade：升级版

## 规范

> 以下关键词 MUST、MUST NOT、REQUIRED、SHALL、SHALL NOT、SHOULD、SHOULD NOT、 RECOMMENDED、MAY、OPTIONAL 依照 RFC 2119 的叙述解读。

1. 使用语义化版本控制的软件<span style="color:red;">必须（MUST）</span>定义公共 API。该 API 可以在代码中被定义或出现于严谨的文件内。无论何种形式都应该力求精确且完整。

2. 标准的版本号<span style="color:red;">必须（MUST）</span>采用 X.Y.Z 的格式，其中 X、Y 和 Z 为非负的整数，且<span style="color:red;">禁止（MUST NOT）</span>在数字前方补零。X 是主版本号、Y 是次版本号、而 Z 为修订号。每个元素<span style="color:red;">必须（MUST）</span>以数值来递增。例如：1.9.1 -> 1.10.0 -> 1.11.0。

3. 标记版本号的软件发行后，<span style="color:red;">禁止（MUST NOT）</span>改变该版本软件的内容。任何修改都<span style="color:red;">必须（MUST）</span>以新版本发行。

4. 主版本号为零（0.y.z）的软件处于开发初始阶段，一切都可能随时被改变。这样的公共 API 不应该被视为稳定版。

5. 1.0.0 的版本号用于界定公共 API 的形成。这一版本之后所有的版本号更新都基于公共 API 及其修改内容。

6. 修订号 Z（x.y.Z | x > 0）<span style="color:red;">必须（MUST）</span>在只做了向下兼容的修正时才递增。这里的修正指的是针对不正确结果而进行的内部修改。

7. 次版本号 Y（x.Y.z | x > 0）<span style="color:red;">必须（MUST）</span>在有向下兼容的新功能出现时递增。在任何公共 API 的功能被标记为弃用时也<span style="color:red;">必须（MUST）</span>递增。也<span style="color:green;">可以（MAY）</span>在内部程序有大量新功能或改进被加入时递增，其中<span style="color:green;">可以（MAY）</span>包括修订级别的改变。每当次版本号递增时，修订号<span style="color:red;">必须（MUST）</span>归零。

8. 主版本号 X（X.y.z | X > 0）<span style="color:red;">必须（MUST）</span>在有任何不兼容的修改被加入公共 API 时递增。其中<span style="color:green;">可以（MAY）</span>包括次版本号及修订级别的改变。每当主版本号递增时，次版本号和修订号<span style="color:red;">必须（MUST）</span>归零。

9. 先行版本号<span style="color:green;">可以（MAY）</span>被标注在修订版之后，先加上一个连接号再加上一连串以句点分隔的标识符来修饰。标识符<span style="color:red;">必须（MUST）</span>由 ASCII 字母数字和连接号 [0-9A-Za-z-] 组成，且<span style="color:red;">禁止（MUST NOT）</span>留白。数字型的标识符<span style="color:red;">禁止（MUST NOT）</span>在前方补零。先行版的优先级低于相关联的标准版本。被标上先行版本号则表示这个版本并非稳定而且可能无法满足预期的兼容性需求。范例：1.0.0-alpha、1.0.0-alpha.1、1.0.0-0.3.7、1.0.0-x.7.z.92。

10. 版本编译信息<span style="color:green;">可以（MAY）</span>被标注在修订版或先行版本号之后，先加上一个加号再加上一连串以句点分隔的标识符来修饰。标识符<span style="color:red;">必须（MUST）</span>由 ASCII 字母数字和连接号 [0-9A-Za-z-] 组成，且<span style="color:red;">禁止（MUST NOT）</span>留白。当判断版本的优先层级时，版本编译信息<span style="color:Aqua;">应该（SHOULD）</span>被忽略。因此当两个版本只有在版本编译信息有差别时，属于相同的优先层级。范例：1.0.0-alpha+001、1.0.0+20130313144700、1.0.0-beta+exp.sha.5114f85。

11. 版本的优先层级指的是不同版本在排序时如何比较。判断优先层级时，<span style="color:red;">必须（MUST）</span>把版本依序拆分为主版本号、次版本号、修订号及先行版本号后进行比较（版本编译信息不在这份比较的列表中）。由左到右依序比较每个标识符，第一个差异值用来决定优先层级：主版本号、次版本号及修订号以数值比较，例如：1.0.0 < 2.0.0 < 2.1.0 < 2.1.1。当主版本号、次版本号及修订号都相同时，改以优先层级比较低的先行版本号决定。例如：1.0.0-alpha < 1.0.0。有相同主版本号、次版本号及修订号的两个先行版本号，其优先层级<span style="color:red;">必须（MUST）</span>透过由左到右的每个被句点分隔的标识符来比较，直到找到一个差异值后决定：只有数字的标识符以数值高低比较，有字母或连接号时则逐字以 ASCII 的排序来比较。数字的标识符比非数字的标识符优先层级低。若开头的标识符都相同时，栏位比较多的先行版本号优先层级比较高。范例：1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0。

## 版本的选取

> 在项目开发中如何选取项目需要的版本(可能是指定的版本, 也可能是某个版本号范围内的某版本), 列如：

```json
{
  "dependencies": {
    "dependency-a": "4.1.13", // 表示依赖指定的4.1.13这个版本
    "dependency-b": "~4.1.13", // 不改变`主版本号4` 和`次版本号3`, 安装`4.1.x`的最新版本(但不低于`4.1.13`,也不超出`4.2.0`)
    "dependency-c": "^4.1.13" // 不改变`主版本号4`, 安装`4.x.x`的最新版本(但不低于`4.1.13`, 也不超出`5.0.0`)
  }
}
```
