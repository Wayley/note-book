# JS 常用的工具函数

## Table of Contents

1. [获取 search 对象](#format-search)

## Contents

<a name="format-search" id="format-search">

```js
function formatSearch(_search) {
  let search = _search || location.search;
  let obj = {};
  search = search.substring(1, search.length);
  if (search) {
    let arr = search.split("&");
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i].split("=");
      const key = item[0];
      const value = item[1] || "";
      obj[key] = value;
    }
  }
  return obj;
}
```
