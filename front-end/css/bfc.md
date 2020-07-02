<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2020-07-02 09:25:19
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2020-07-02 16:03:52
 * @Description: Block Formatting Contexts In CSS
-->

# BFC

> Block Formatting Contexts

## BFC 概念

Formatting Contexts: 页面中拥有一套渲染规则的容器,这套渲染规则将决定子元素如何定位以及和其他元素的关系和相互作用。

## BFC 渲染规则

1. 内部块级元素会在垂直方向从顶端一个接一个地放置排列。
2. 块级元素垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻块级元素的 margin 会发生重叠。
3. 在 BFC 中，每一个盒子的左边缘会触碰到父容器的左边缘内部，也就是说在没有 margin 和 padding 的时候，父 border 的内边和子 border 的外边重叠。
4. BFC 的区域不会与浮动盒子产生交集，而是紧贴浮动边缘。
5. 如果父盒子没有设置高度，但子盒子中有浮动元素，那么在计算 BFC 的高度时，会计算上浮动盒子的高度。

## BFC 触发条件

1. 设置了 float 属性,并且值不为 none
2. position 属性值为 absolute 或 fixed
3. display 为 inline-block、table-cell、table-caption、flex、inline-flex、flow-root
4. overflow 属性不为 visible

## BFC 应用

1. 清除浮动

`clear: both`清除浮动，也可以根据(浮动元素参与 BFC 高度计算)来清除浮动，解决高度坍塌问题

2. 解决上下 margin 边距问题

```html
<style>
  .box {
    width: 200px;
    height: 90px;
  }
</style>
<body>
  <!-- box_1 box_2属于同一个BFC，因此相邻块级元素的margin会重叠 -->
  <div
    id="box_1"
    class="box"
    style="border: 1px solid red; margin-bottom: 15px;"
  ></div>
  <div
    id="box_2"
    class="box"
    style="border: 1px solid green; margin-top: 15px; margin-bottom: 15px;"
  ></div>
  <!-- overflow: auto会触发一个新的BFC；box_2和box_3属于不同的BFC,因此margin不会重叠-->
  <div style="overflow: auto;">
    <div
      id="box_3"
      class="box"
      style="border: 1px solid pink; margin-top: 15px;"
    ></div>
  </div>
</body>
```

3. 实现自适应两栏布局

```html
<style>
  body {
    text-align: center;
  }
  .sider {
    float: left;
    width: 30%;
    height: 300px;
    background-color: #999;
  }
  .main {
    height: 550px;
    background-color: #ccc;
  }
</style>

<body>
  <div class="sider">sider</div>
  <div class="main">main</div>
</body>
```

根据 <strong>`规则1`</strong>，要把 `.sider` 写到 `.main`前面，这样才能浮动起来覆盖在`.main`上面

根据<strong>`规则4`</strong>(BFC 的区域不会与浮动盒子产生交集，而是紧贴浮动边缘), 给`.main`加上`overflow: auto`;触发新的 BFC;
