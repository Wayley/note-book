# 前端代码规范

## 开发基本原则

### 基本原则

#### 结构、样式、行为分离

在前端代码中,文档和模板尽量只包含`HTML`结构;样式都放到样式表`CSS`中;行为都放到脚本`script`中

#### 缩进

尽量保持一致的风格,一般建议<strong>两个空格</strong>缩进,不推荐`Tab`或者`Tab`和`Space`混搭; 一般推荐写入到项目的`.editorconfig`文件中

#### 文件编码

一般推荐使用`utf-8`编码集,一般在项目的`.editorconfig`文件中也可以设置

1. HTML 中指定`<meta charset="UTF-8">`
2. CSS 中默认`@charset`为`utf-8`

#### 注释统一

一般采用一致认可的注释模式,我在编辑器中设置快捷键在统一模板

- HTML 注释

```html
<!-- <div class="app">单行注释</div> -->

<!-- <div class="app">
    <div class="container">多行注释</div>
  </div> -->
```

- CSS 注释

```css
.app {
  /* color: red; */

  font-size: 20px; /* 字体大小 */

  /* background-color: #ccc;
  text-align: center; */
}
```

- JavaScript 注释

  - 单行注释

  ```js
  // 单行注释
  ```

  - 多行注释

  ```js
  /* 多行注释;
  多行注释;
  */
  ```

  - 函数注释

  ```js
  /**
   * [add]
   * @param  {[Number]} m      [加数1]
   * @param  {[Number]} n      [加数2]
   * @return {[Number]}        [两个加数之和]
   */
  function add(m, n) {
    return m + n;
  }
  ```

#### 命名规范

- 文件夹命名

1. 常见的有`camelCase`和`kebab-case`, 推荐使用`kebab-case`命名文件夹,注意会更加清晰明了
2. 源文件目录一般命名`src`; 公共组件目录一般是`src/components`;页面视图文件目录一般是`src/views`;
3. 测试文件目录一般是`tests`
4. 非编译文件目录一般是`public`

- 文件命名

1. 组件命名一般使用`camelCase`,例如:`HelloWorld.jsx`
2. 视图文件命名一般使用小写字母命名
3. 其他普通文件命名一般使用小写字母命名

- 文件名称常用规则含义

| 使用格式  |       表示含义       |       示例       |
| :-------: | :------------------: | :--------------: |
|    `-`    | 代替自然语言中的空格 |   `react-dom`    |
|    `.`    |     表示从属关系     | `jquery.form.js` |
|   `min`   |   表示压缩的源文件   |   `vue.min.js`   |
| `runtime` |  表示运行时的源文件  | `vue.runtime.js` |

## HTML 规范

### 通用约定

#### 标签

1. 自闭和标签(self-closing tag)无需闭合,例如:`<img src="" alt="">`、`<input type="text" name="" id="">`
2. 可选的闭合标签(closing tag),需闭合,例如:`<body></body>`、`<div class="app"></div>`
3. 尽可能地减少标签数量,使 DOM 树简单

#### 标签属性

1. `class`属性
   `class`应该以功能或者内容为命名基础,不建议以表现形式命名;建议使用`小写字母`命名,多个单词时,使用中划线`-`连接,例如:`wrapper` 、 `menu-list`、`menu-item`
2. `id`属性,命名规则如`class`,使用`id`时应保证唯一性

3. 多标签属性的顺序
   HTML 标签的属性应按照特定的顺序出现以保证易读性;一般按照`id`、`class`、`name`、`data-xx`、`src/for/type/href`、`title/alt`、`aria-xx/role`

#### 引号

HTML 标签属性的定义使用`双引号`

#### 标签签套

1. 语义嵌套约束
   `<li>`嵌套于`<ul>`或者`<ol>`下;
   `<dd>`嵌套于`<dt>`或者`<dl>`下;
   `<thead>`、`<tbody>`、`<tfoot>`嵌套于`<table>`下;
   `<tr>`嵌套于`<td>`下;
2. 严格嵌套约束
   `inline-level`元素<strong>仅可以</strong>包含文本或者其他`inline-level`元素;
   `<a>`里面<strong>不可以</strong>嵌套交互式元素,例如:`<a>`、`<button>`、`<select>`;
   `<p>`里面<strong>不可以</strong>嵌套块级元素,例如:`<div>`、`<h1>`、`<ul>`;

#### 布尔值属性

HTML5 规范中`disabled`、`checked`、`selected`等属性不用设置值

```html
<input type="text" disabled />

<input type="checkbox" value="1" checked />

<select>
  <option value="1" selected>1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
```

### 语义化

语义化的 HTML 结构有助于机器或者搜索引擎理解,能更加迅速的理解开发者的意图

常见的语义化标签

|       标签        |         语义          |
| :---------------: | :-------------------: |
|       `<p>`       |         段落          |
|      `<ul>`       |       无序列表        |
|      `<ol>`       |       有序列表        |
|     `<code>`      |       代码标识        |
| `<h1>`、`<h2>`... | 一级标题、二级标题... |
|    `strong`...    |       内容加粗        |

### HEAD

#### 文档类型

在 HTML 文档中第一行添加标准模式的声明,这样在不同浏览器中拥有一致的表现

```html
<!DOCTYPE html>
```

#### 语言属性

```html
<html lang="en"></html>
```

#### 字符编码

1. 以`UTF-8`编码为文件格式编码集
2. 指定字符编码的`meta`标签必须放到`head`的第一个直接子元素

```html
<head>
  <meta charset="UTF-8" />
  <!-- some code -->
</head>
```

#### 兼容模式

优先使用最新版本的 IE 和 Chrome 内核

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1" />
```

#### SEO

为了更好的 SEO 优化,文档`head`中应添加如下相关信息

```html
<title>Project Name</title>
<meta name="description" content="xxx xxx" />
<meta name="keywords" content="xxx xxx" />
<meta name="author" content="xxx" />
```

#### viewport

`viewport`一般指浏览器窗口内容区的大小,不包含工具条和选项卡等内容;

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

`width`:浏览器宽度,输出设备中的页面可见区域宽度
`device-width`:设备分辨率宽度,输出设备的屏幕可见宽度
`initial-scale`:初始缩放比例
`maximum-scale`:最大缩放比例

#### favicon

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```

## CSS 规范

### 通用约定

#### 类名和 ID

1. 类名和 ID 名尽量使用语义化、通用的命名方式
2. 使用连字符`-`作为 ID、Class 名称界定符,避免驼峰命名法和下划线命名法
3. 避免选择器嵌套层级过多,尽量少于 3 级
4. 尽量避免元素选择器叠加混合使用

#### 声明块格式

- 选择器分组时,保持独立的选择器占用一行
- 声明块的左括号`{`前有一个空格
- 声明块的右括号`}`单独成一行
- 声明语句中`:`后有一个空格
- 声明语句以`;`结尾
- 一般以逗号`,`分隔的属性值,每个逗号后应有一个空格
- `rgb()`、`rgba()`、`hsl()`、`hsla()` 或 `rect()` 括号内的值，逗号分隔,但逗号后不添加一个空格
- 对于属性值或颜色参数,省略小于 1 的小数前面的 0 (例如:`0.6rem`可写为`.6rem`)
- 十六进制的值应该全部小写并尽量简写(例如: `#FFFFFF`应写为`#fff`)
- 避免为 0 的值指定单位(例如:`margin-top: 0px`写为`margin-top: 0`)

#### 声明顺序

相关属性应为一组,推荐如下顺序

1. 定位属性(Positioning)
2. 盒模型(Box Model)
3. 排版(Typographic)
4. 视觉属性(Visual)
5. 其他属性

定位属性可以从正常的文档流中移除元素,而且还能覆盖盒模型相关的样式,因此排在首要位置; 盒模型决定了元素的尺寸和位置,因此排在次要位置;其他属性只影响元素内部,因此排在后面
例如:

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  right: 10px;
  z-index: 99;

  /* Box Model */
  display: block;
  box-sizing: border-box;
  margin: 15px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  float: left;
  overflow: hidden;

  /* Typographic */
  font: normal 16px "PingFang SC";
  line-height: 1.5;
  text-align: center;

  /* Visual */
  color: #333;
  opacity: 0.7;
  background-color: #fff;

  /* Other */
  cursor: pointer;
}
```

#### 引号使用

使用双引号`""`

#### 媒体查询

尽量将媒体查询放到相关规则附近; <strong>不要</strong>将他们打包放到一个单一样式文件中或者放到文档底部

#### @import 的使用

尽量避免使用`@import`,它会比`<link>`慢很多,而且会额外增加请求数
替代办法:

1. 使用多个元素
2. 通过 css 预处理器(`Less`、`Sass`)将多个 css 文件编译到一个文件中
3. 使用其他 css 文件合并工具

#### 伪类的顺序

1. `a:link`
2. `a:visited`
3. `a:hover`
4. `a:active`

#### css 属性前缀

`-webkit-`、`-ms-`、`-o-`、`--moz-`等; 可以使用(`autoprefixer`)[https://github.com/postcss/autoprefixer]自动添加浏览器厂商的前缀

#### 代码组织

- 以元素(组件)为单位组织代码段
- 保持一致的注释规范, 尽可能描述组件的工作方式、局限性以及构建方法
- 组件块和子组件块以及声明块之间只有空行分隔,子组件块之间三空行分隔
- 多个 css 文件时,按照组件进行分拆,而不是以页面形式

### 模块组织

遵循`Reasonable System for CSS Stylesheet Structure`规范

### css 预处理器规范

#### 代码组织

代码按照如下顺序进行组织编写

1. @import
2. 变量声明
3. 样式声明

```less
@import "./base.less";
@primary-color: #ccc;
@min-width: 300px;
.title(@color:"#000") {
  font-size: 24px;
  font-weight: 700;
  line-height: 2;
  color: @color;
}
.app {
  color: @primary-color;
  min-width: @min-width;
  .title();
}
```

##### @import

`@import`语句引入的文件路径要使用引号`""`或`''`,但要保持统一;文件后缀名称(例如:`.less`、`.scss`)不要省略

#### 变量声明

- 变量声明

```less
@primary-color: #ccc;
@min-width: 300px;
```

- 混入 Mixin

```less
.title(@color:"#000") {
  font-size: 24px;
  font-weight: 700;
  line-height: 2;
  color: @color;
}
```

参数默认值可有可无,建议写默认值; 多个参数的时候,使用分号`;`隔开参数;

#### 嵌套层级

嵌套层级不宜过多,应限制在`三级`以内

### css 性能优化

- 慎重使用高消耗属性(如: `box-shadow`、`transform`、`css filter`等)
- 避免过度重排
- 正确使用`display`属性
  `display`属性影响页面渲染,请合理使用
  1. `inline`后不应该使用`width`、`height`、`margin`、`padding`、`float`等属性
  2. `inline-block`后不应该使用`float`属性
  3. `block`后不应该使用`vertical-align`属性
  4. `table-*`后不应该使用`margin`、`float`等属性
- 不滥用`float`(float 在渲染的时候计算比较大,尽量减少使用)
- 动画性能优化
  1. 尽量使用 50-60fps 帧率的动画,因为一般浏览器渲染刷新频率是 60fps,这样动画会相当流畅
  2. 基于 JavaScript 的动画,尽量使用`requestAnimationFrame`,避免使用`setTimeout`和`setInterval`
  3. 使用 css 声明动画,避免使用 JavaScript 改变每帧的样式
  4. 使用`translate` 代替`absolute`定位的动画会得到更好的 fps,动画更加流畅
- 多利用硬件能力
  例如: 使用`translate3d`时,在硬件加速渲染通道的优化下,GPU 完成 3D 变换后将图层进行复合操作,从而避免触发浏览器大面积重绘和重排
- 提升 css 选择器性能
  css 选择器对性能的影响源于浏览器匹配选择器和文档元素时所消耗的时间。<strong>css 选择器是从右到左进行规则匹配</strong>,与我们书写 css 的顺序恰好相反

  1. 避免使用通用选择器
  2. 避免使用标签或 class 选择器限制 id 选择器
  3. 避免使用标签限制 class 选择器
  4. 避免使用多层标签选择器, 应使用 class 选择器替换
  5. 避免使用子选择器
  6. 使用继承

## JavaScript 规范

### 通用约定

#### 注释

##### 注释原则

- As short as possible(如无必要,勿增注释):尽量提高代码本身的清晰性、可读性
- As long as necessary(如有必要,尽量详细):合理的注释、空行排版等,可以让代码更具美感

##### 单行注释

单行注释独占一行。`//`后跟一个空格,缩进与下一行注释说明的代码一致

##### 多行注释

避免使用`/*...*/`这样的多行注释。有多行注释内容时,使用多个单行注释。

##### 函数(方法)注释

1. 函数(方法)注释必须包含函数说明,有参数和返回值时必须使用注释标识
2. 参数和返回值注释必须包含类型信息和说明
3. 当函数是内部函数,外部不可访问时,可以使用@inner 标识

##### 文件注释

文件注释应该提供文件的大体内容、它的作者、依赖关系以及和兼容性等信息

#### 命名规范

- 变量命名使用 Camel 命名法

```js
var searchModule = {};
```

- 私有属性、变量和方法以<strong>下划线</strong>`_`开头

```js
var _version = "0.1.0";
```

- 常量全部使用大写字母,单词间以下划线分隔的命名方式

```js
const MAX_LENGTH = 5;
```

- 函数使用 Camel 命名法

```js
function getCode() {}
```

- 函数参数使用 Camel 命名法

```js
function singSong(songName, songUrl) {}
```

- 类使用 Pascal 命名法

```js
function Popup() {}
```

- 类的方法和属性使用 Camel 命名法

```js
function Popup(width, title) {
  this.width = width;
  this.title = title;
}
Popup.prototype.render = function () {};
```

- 枚举变量使用 Pascal 命名法

```js
var OrderStatus = {};
```

- 枚举的属性,全部大写字母,多字母用下划线`_`分隔连接的命名方式

```js
var OrderStatus = {
  OPENDED: 1,
  CANCEL: 2,
  CLOSED: 3,
  FINISHED: 4,
};
```

- 缩写词在命名中根据当前命名法和出现位置,所有字母的大小写与首字母的大小写保持一致

```js
function XMLParser() {}
function insertHTML() {}
var httpRequest = new HTTPRequest();
```

#### 命名语法

- 属性名称 使用名称
- 类名 使用名词
- 函数名 使用动宾短语
- Booleanl 类型的变量使用`is`或`has`开头
  ```js
  var isReady = true;
  var hasMoreCommands = false;
  ```
- Promise 对象 使用动宾短语的进行时表达
  ```js
  var loadingData = ajax.get("/xxx");
  loadingData.then(callback);
  ```
- 接口命名要可读性强

#### 布尔表达式

- 类型检测优先使用 `typeof`
- 对象类型检测使用`instanceof`
- null 和 undefined 的检测使用`== null`
- null、undefined、''和 0 返回 false
- '0'(字符串的 0)、'null'、'undefined'、[]、{}返回 true

#### 三元操作符

操作符始终写到前一行,避免分号的隐式插入引起意外问题

```js
var larger = n1 > n2 ? n1 : n2;
```

#### 二元布尔操作符

尽量使用`&&` 和 `||`,可以节省运算

### 性能优化

- 避免不必要的 DOM 操作

当一个元素在 js 操作中多次出现,可以将它保存到变量中,避免多次查询 DOM 树

```js
var menuDom = document.querySelector("#menu");
// some code
```

- 缓存数组长度

在 for 循环中,先于循环缓存数组长度,避免每次计算

- 异步加载

例如:在`script`标签中加上`async`属性

- 按需加载

使用各种`loader`按需加载资源
