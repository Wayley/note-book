# PostMessage

- sendMessage

  ```js
  // http://localhost:9090/

  let origin = "http://localhost:6363/";
  let _window = window.open(origin, "_blank");
  let message = JSON.stringify({
    name: "_name_9090_",
    token: "_token_9090_qazwsxedcrfvtgb_",
  });
  setTimeout(() => {
    _window.postMessage(message, origin);
  }, 1000);
  ```

- dispatchMessage

  ```js
  // http://localhost:6363/

  window.addEventListener(
    "message",
    function (event) {
      const { origin, data } = event;
      if (origin == "http://localhost:9090") {
        const message = JSON.parse(data);
        console.log("message: ", message);
      }
    },
    false
  );
  ```
