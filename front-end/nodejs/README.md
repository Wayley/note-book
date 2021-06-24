# Node.js

## 初识 nodejs

> 在终端输入 `node ./app.js`,然后打开浏览器输入`http://localhost:3000/`, `app.js`内容如下:

```js
// app.js

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
