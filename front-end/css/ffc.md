<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2020-07-02 16:48:30
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2020-07-02 17:22:24
 * @Description:
-->

# FFC

> Flex Formatting Contexts

## FFC 生成条件

父元素设置`display: flex`或者`display: inline-flex`

## FFC 应用

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
  }
  .header,
  .footer {
    height: 100px;
    background-color: #999;
  }
  .content {
    display: flex;
    flex: 1;
  }
  .nav,
  .adside {
    width: 100px;
    background-color: #ccc;
  }
  .nav {
    order: -1;
  }
  .main {
    flex: 1;
  }
</style>

<body>
  <div class="wrap">
    <header class="header">header</header>
    <div class="content">
      <nav class="nav">nav</nav>
      <main class="main">main</main>
      <aside class="adside">adside</aside>
    </div>
    <footer class="footer">footer</footer>
  </div>
</body>
```
