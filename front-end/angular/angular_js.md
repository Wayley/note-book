# AngularJS

> This is the notes collection for [AngularJS]()

## Table of Content

1. [module](#module)

## Contents

### Module

<a name="module">

```js
angular.module("xx.chapter", []).directive("xxChapter", [
  function (courseService) {
    return {
      restrict: "AE", // E:作为元素名使用; A: 属性; C: 类名; M: 注释;

      scope: {
        data: "=",
        keepSelection: "@",
        onSelection: "&",
      },
      templateUrl: "/tpl/directive/chapter.html", // 页面模板
      link: function (scope, element, attrs) {},
    };
  },
]);
```
