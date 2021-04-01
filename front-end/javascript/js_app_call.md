# JS 与 APP 通讯

```js
function appcall(methodName, params) {
  if (window.android && window.android[methodName]) {
    window.android[methodName](JSON.stringify(params));
  } else if (
    window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers[methodName]
  ) {
    window.webkit.messageHandlers[methodName].postMessage(params);
  }
}
const postMessage = (method, message) => {
  if (window.AndroidWebView) {
    // Android
    if (message) {
      window.AndroidWebView[method](message);
    } else {
      window.AndroidWebView[method]();
    }
  } else {
    // iOS
    window.webkit.messageHandlers.a.postMessage({
      body: {
        method,
        message,
      },
    });
  }
};
```
