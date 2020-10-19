# 原生JS文件上传进度

1. [文件读取进度](#read)
2. [文件上传进度](#upload)


<a name="read" id="read">

## 文件读取进度
```css
.abort-btn{
  display: none;
}
.percent{
  display: none;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ccc;
}
.loading{
  display: block;
}

```
```html
<div>
  <input type="file" id="files" name="file" />
  <button class="abort-btn" onclick="abortRead();">取消</button>
  <div class="percent">0%</div>
</div>
```
```js
var reader;
var progress = document.querySelector('.percent');
var abortBtn = document.querySelector('.abort-btn');

// 添加事件处理
document.getElementById('files').addEventListener('change', handleFileSelect, false);
function handleFileSelect(e) {
  // 在选择新文件后重置进度指示器
  progress.style.width = '0%';
  progress.textContent = '0%';

  reader = new FileReader();
  
  reader.onloadstart = function (e) {
    abortBtn.style.display = 'inline-block';
    progress.className += ' loading';
  };
  reader.onprogress = updateProgress;
  reader.onabort = function (e) {
    alert('已取消读取');
  };
  reader.onload = function (e) {
    // 确保进度条最后显示100％
    progress.style.width = '100%';
    progress.textContent = '100%';
    abortBtn.style.display = 'none';
  }
  reader.onerror = errorHandler;

  // 将文件作为二进制字符串读入
  reader.readAsBinaryString(e.target.files[0]);
}

// 取消读取
function abortRead() {
  reader && reader.abort();
}
// 错误处理
function errorHandler(e) {
  switch (e.target.error.code) {
    case e.target.error.NOT_FOUND_ERR:
      alert('文件没找到');
      break;
    case e.target.error.NOT_READABLE_ERR:
      alert('文件不可读');
      break;
    case e.target.error.ABORT_ERR:
      break;
    default:
      alert('读取文件时出错');
  };
}

// 更新进度条
function updateProgress(e) {
  // e 是一个 ProgressEvent.
  if (e.lengthComputable) {
    var percentLoaded = Math.round((e.loaded / e.total) * 100);
    // 更新进度条长度
    if (percentLoaded < 100) {
      progress.style.width = percentLoaded + '%';
      progress.textContent = percentLoaded + '%';
      
    }
  }
}
```

<a name="upload" id="upload">

## 文件上传到服务器进度