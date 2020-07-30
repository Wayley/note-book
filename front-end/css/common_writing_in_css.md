# 常见的 CSS 写法

## 公共类

### 多行显示,超出...

#### 单行文本

```html
<div class="box">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ducimus a eum
  tempora tenetur reiciendis magnam odio placeat cum id qui dignissimos iste
  impedit laboriosam, aperiam inventore vitae? Quas, delectus!
</div>
```

```css
.box {
  width: 720px;
  height: 28px;
  line-height: 28px;
  background-color: aquamarine;
  /*  */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

#### WebKit 浏览器或移动端的页面

```html
<div class="box">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ducimus a eum
  tempora tenetur reiciendis magnam odio placeat cum id qui dignissimos iste
  impedit laboriosam, aperiam inventore vitae? Quas, delectus!
</div>
```

```css
.box {
  width: 720px;
  height: auto;
  line-height: 28px;
  background-color: aquamarine;
  /*  */
  display: -webkit-box; /* 值必须为-webkit-box或者-webkit-inline-box; 将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-line-clamp: 2; /* 值为数字，表示一共显示几行 */
  overflow: hidden;
  text-overflow: ellipsis; /* 可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本  */
}
```
