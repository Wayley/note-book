<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2020-07-02 16:05:53
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2020-07-02 16:38:32
 * @Description:
-->

# IFC

> Inline Formatting Contexts

## IFC 生成条件

块级元素中仅包含内联级别元素。

注意：当 IFC 中有块级元素插入的时候，会产生两个匿名块将父元素分割开，产生两个 IFC。

## IFC 渲染规则

1. 子元素水平方向横向排列，并且垂直方向起点为元素顶部
2. 子元素只会计算横向样式空间，垂直方向样式空间不会被计算
3. 在垂直方向上，子元素会以不同形式来对齐(vertical-align)
4. 能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框(`line box`); 行框的宽度是由包含块(contain box)和与其中的浮动来决定的。
5. IFC 中的`line box`一般左右贴紧其包含块，但 float 元素会优先排列
6. IFC 中的`line box`高度由 CSS 行高计算规则来确定，同个 IFC 下的多个`line box`高度可能会不同
7. 当``line
